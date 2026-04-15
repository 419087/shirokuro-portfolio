---
title: "VRにおける遅延がユーザ体験に与える影響の評価"
publishDate: 2026-02-24
description: "卒業研究で取り組んでいる、VRにおけるネットワーク遅延の評価実験です。"
tags: ["Unity", "VR", "Research"]
image: ./vr-research/test.png
---

## 概要
学部の卒業研究として取り組みました。本研究では、触覚フィードバックのあるVR環境において、ネットワーク遅延が没入感にどのような影響を与えるかを調査しています。[情報処理学会 第88回全国大会](https://www.ipsj.or.jp/event/taikai/88/index.html)で発表を行い、学生奨励賞をいただきました。

## システム
2台のクライアントと1台のサーバーで通信を行い、2人のユーザーがVR空間でハイタッチを行うことができるようになっています。

## 技術スタック
- Unity 6000.2.6f2
    - UniTask
    - VContainer
    - OpenXR
    - Netcode for GameObjects
- C#

## Links
- [GitHubリポジトリ](https://github.com/419087/latency-vr-interaction-experiment)