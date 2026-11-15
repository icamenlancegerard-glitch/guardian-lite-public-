# Independent Tester Rules

These rules apply to any future external test session for The Guardian.

## Current availability

**No public runnable test package is available yet.** Do not begin technical testing based on this documentation alone. Wait for a versioned package and explicit written scope from the maintainer.

## Allowed only after authorization

- Run the supplied package in the documented disposable local environment.
- Use only the synthetic accounts, credentials, data, and mock services supplied with that package.
- Exercise only the test scenarios and limits explicitly listed for that package.
- Preserve relevant evidence while redacting secrets and personal information.
- Stop and report privately if the package behaves outside its documented boundary.

## Never allowed

- Testing any live or production Guardian / Guardian Lite system.
- Scanning or attacking third-party systems, public IPs, hosted endpoints, or infrastructure.
- Using real money, payment rails, customer data, personal data, or production credentials.
- Denial-of-service testing, destructive testing, persistence, lateral movement, or attempts to access another tester's environment.
- Publishing vulnerabilities, secrets, tokens, exploit details, or sensitive logs before coordinated review.
- Treating access to this public documentation repository as permission to test any other asset.

## Stop conditions

Stop immediately if a test appears to leave the disposable environment, reaches an unexpected external host, exposes real data or credentials, or causes an unintended action. Preserve only the minimum redacted evidence needed for a private report.

## Reporting

Send findings privately using the route in [SECURITY.md](../SECURITY.md), with the [report template](REPORT_TEMPLATE.md). Public issues and social-media comments are not appropriate places for vulnerability details.
