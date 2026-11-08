# Architecture

## Purpose

Guardian Lite explores a control point between an AI agent and a protected service. The objective is to evaluate authorization before a consequential action reaches that service.

This document describes the public, conceptual model. It is not a complete implementation specification, and it intentionally omits private implementation details.

## Conceptual request path

```text
AI agent
   |
   | proposes an action
   v
Guardian Lite authorization boundary
   |
   +---- DENY ----> stop the protected action
   |
   +---- ALLOW ---> guarded execution path
                         |
                         v
                  protected service

Authorization decision
   |
   v
Audit record
```

The critical design requirement is that the protected action must not be executable through an alternate path that skips the authorization boundary.

## Trust boundaries

### 1. AI agent

The agent is treated as an untrusted request initiator. A model-generated request is not proof of permission, user intent, or safety.

### 2. Authorization boundary

The authorization component evaluates the requested action against the configured policy and produces an explicit decision. An approval response must not be confused with execution having safely completed.

### 3. Protected service

The protected service is the resource that performs the consequential operation. The integration must ensure that the agent cannot bypass the guarded path using a separate credential, endpoint, or execution route.

### 4. Audit record

The system records authorization decisions for later review. An audit record is useful evidence, but it is not automatically tamper-proof, complete, or independently verified.

## Enforcement principle

A decision point that is not on the actual execution path is only advisory.

For a guarded integration, the design must answer:

- Which component can reach the protected service?
- Where are service credentials held?
- Can the agent call the service directly?
- Are there alternate tools, endpoints, workers, or credentials that bypass the check?
- What is recorded when a request is denied, allowed, or interrupted?

## Current evidence boundary

M0 included controlled runtime checks of a configured boundary. Those checks do not establish that every possible integration path is protected. See [Evidence status](EVIDENCE.md) for the limited results and qualifications.

## Not claimed

This architecture does not claim universal agent safety, complete mediation in every deployment, tamper-proof logging, or protection from a compromised host or protected service.
