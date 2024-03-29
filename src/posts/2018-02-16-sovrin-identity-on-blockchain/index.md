---
title: Sovrin Identity On Blockchain
author: Justin Ball
tags:
  - "sovrin"
  - "blockchain"
  - "identity"
date: 2018-02-16T16:00:00.000Z
templateKey: blog-post
path: "/sovrin-identity-on-blockchain"
description: ""
image:
---

I've been to various identity workshops over the year so when I saw <a href="https://sovrin.org">sovrin</a> it peaked my interest. I'm particulary interested in using public ledger technologies to improve the education space. I'll have another blog post about that at some point, but for now here are notes and links to resources related to Sovrin.

Sovrin doesn't rely on miners or farmers to maintain their blockchain instead you have to be accepted as a steward. <a href="https://sovrin.org/stewards/">Here's a current list of the stewards.</a>

If you want to be a steward you'll need to apply and understand the <a href="https://sovrin.org/library/trust-framework/">trust framework</a>.

Here's some example code from their <a href="https://github.com/sovrin-foundation/sovrin">github repository</a>.

Evernym contributes some whitepapers along with the Sovrin foundation. <a href="https://www.evernym.com/index/white-papers/">Here's a link to their whitepapers.</a>


A note from the <a href="https://docs.google.com/document/d/18V1c0rOQYxNMleuV_2z7yQny0KdBnuDkWlN8DNUrioM/edit#heading=h.cmvzgsc2cev">Sovrin Trust Framework</a> documentation on what a DID is:
Identity Record. A transaction on the Sovrin Ledger that describes a Sovrin Entity. Every Identity Record is associated with exactly one DID. The registration of a DID is itself an Identity Record. Identity Records may include Public Keys, Service Endpoints, Claim Definitions, Public Claims, and Proofs. Identity Records are Public Data.
that’s what is writen to the public chain

<ul>
  <li><a href="https://w3c-ccg.github.io/did-spec/">Here's the Decentralized Identifiers (DID) specification from the W3C</a></li>
  <li><a href="https://github.com/WebOfTrustInfo/ID2020DesignWorkshop/blob/master/topics-and-advance-readings/DID-Whitepaper.md">Decentralized Identifiers (DIDs) and Decentralized Identity Management (DIDM)</a></li>
  <li><a href="https://medium.com/decentralized-identity/a-universal-resolver-for-self-sovereign-identifiers-48e6b4a5cc3c">A Universal Resolver for self-sovereign identifiers</a></li>
  <li><a href="https://medium.com/decentralized-identity/the-rising-tide-of-decentralized-identity-2e163e4ec663">The Rising Tide of Decentralized Identity</a></li>
  <li><a href="https://hackernoon.com/identity-without-authority-a-decentralized-id-system-for-the-whole-world-bf9aad1a096b">Identity Without Authority: A Decentralized ID System for the Whole World</a></li>
  <li><a href="http://www.windley.com/archives/2018/02/decentralized_governance_in_sovrin.shtml">Phil Windley - Decentralized Governance in Sovrin</a></li>
</ul>
