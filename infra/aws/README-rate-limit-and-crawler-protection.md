# AWS crawler/scraper protection baseline (without observability)

This folder contains a baseline implementation for points 1-5:

1. CDN/WAF protection for `/posts/*`
2. Bot control
3. Caching and edge hardening
4. `robots.txt` crawl directives
5. Behavior-based rules

## Files

- `infra/aws/waf/blog-web-acl.json`
- `infra/aws/cloudfront/posts-cache-policy.json`
- `public/robots.txt`

## 1) Create WAF regex pattern sets first

`blog-web-acl.json` references two regex pattern set ARNs you must create:

- `REPLACE_WITH_YOUR_UA_ALLOWLIST_REGEX_PATTERN_SET_ARN`
- `REPLACE_WITH_YOUR_BAD_UA_REGEX_PATTERN_SET_ARN`

Suggested patterns:

- allowlist UA patterns (lowercase):
  - `googlebot`
  - `bingbot`
  - `duckduckbot`

- bad UA patterns (lowercase):
  - `curl`
  - `python-requests`
  - `scrapy`
  - `httpclient`
  - `go-http-client`
  - `wget`

After creating the two regex pattern sets, replace the placeholders in `blog-web-acl.json`.

## 2) Create and associate WAF Web ACL (CloudFront scope)

Use AWS CLI from `us-east-1`:

```bash
aws wafv2 create-web-acl \
  --scope CLOUDFRONT \
  --region us-east-1 \
  --cli-input-json file://infra/aws/waf/blog-web-acl.json
```

Then associate the resulting Web ACL ARN to your CloudFront distribution.

## 3) Create CloudFront cache policy for posts

```bash
aws cloudfront create-cache-policy \
  --cache-policy-config file://infra/aws/cloudfront/posts-cache-policy.json
```

Attach the created policy to the `/posts/*` behavior in your distribution.

This policy hardens cache behavior by:

- not forwarding query strings
- not forwarding cookies
- not forwarding request headers

## 4) `robots.txt`

`public/robots.txt` is included and will be published with your static site.
It blocks generic query-parameter crawling and disallows specific AI crawlers.

## 5) Behavior-based rules included in WAF template

The WAF template includes:

- `RateLimitPostsPerIp` (300 req / 5 min / IP)
- `RateLimitAggressivePostsBurst` (120 req / 5 min / IP, non-allowlisted UA)
- `BlockEmptyUserAgentOnPosts`
- `BlockKnownScraperUserAgentsOnPosts`

## Notes

- Start strict rules in production only when you are comfortable with the thresholds.
- For a softer rollout, temporarily change rule actions from `Block`/`Challenge` to `Count`.
