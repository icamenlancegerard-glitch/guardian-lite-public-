# Guardian Lite

**Know before AI acts.**

Guardian Lite is an early-stage project exploring an authorization and enforcement layer for actions initiated by AI agents.

The project focuses on a narrow but important question:

> Before an AI agent performs a consequential action, where is the permission checked—and what prevents the action from bypassing that check?

## What it is intended to do

Guardian Lite explores four connected capabilities:

- **Authorization:** evaluate whether a proposed action is permitted.
- **Decision:** return an explicit `ALLOW` or `DENY` result.
- **Enforcement:** place the check in the execution path to a protected service.
- **Audit record:** retain a record of the authorization decision.

An `ALLOW` decision is not, by itself, proof that an action is safe. The protected action must remain behind the enforcement boundary, and every relevant execution path must be covered.

## Current status

| Area | Status |
|---|---|
| M0 | Initial controlled-runtime evidence collected; M0 is frozen |
| M1-A | Credential-exposure attack-evidence work; evidence collection only |
| Production deployment | Not established |
| Independent security assessment or certification | Not established |

Guardian Lite is **not presented as production-ready**, independently audited, or certified. The evidence currently described in this repository is limited to specific controlled tests. It must not be interpreted as a guarantee against all bypasses, attacks, or integration failures.

## Public repository scope

This repository contains project documentation and reviewed, high-level evidence summaries only.

The implementation, internal test fixtures, detailed runtime configuration, credentials, and other sensitive development materials are kept out of this public repository.

## Important boundary

Protection depends on the actual integration. If an agent or another component can reach the protected service through an unguarded route, an authorization decision made elsewhere may not stop that action.

Guardian Lite aims to make that boundary explicit and testable. It does not make an AI model inherently safe, and it does not replace the security controls of the protected service.

## Start here

- [Architecture](ARCHITECTURE.md)
- [Threat model](THREAT_MODEL.md)
- [Evidence status](EVIDENCE.md)
- [Roadmap](ROADMAP.md)
- [Demo outline](DEMO.md)
- [Security policy](SECURITY.md)

## Guiding principle

**Security begins with honest boundaries.**

The project will distinguish documented behavior from assumptions, and tested results from future goals.
