---
title: "Geo History"
publishDate: 2026-04-17
description: "位置情報を用いて、訪れた市区町村や駅をコレクションできるスマホアプリ"
tags: ["Application", "Unity", "API"]
image: ./geo-history/geo-history.png
youtubeUrl: https://youtu.be/5eD1vfGi7Oc
---

## 概要
位置情報から、現在いる市区町村や近くの駅の情報を記録し、地図上で閲覧できるスマホアプリです。駅情報を返すWeb APIも自作しました。

## 背景
研究室で、ネットワークについて学ぶためにTCP/IPを利用したアプリを作るという課題が出され、開発を行いました。

Unityを使って制作したのですが、バックグラウンドでの動作やブラウザとの統合を考えると、ネイティブアプリとして制作した方がよかったことに気づき、技術選定に失敗してしまいました。このときの経験から、今では事前に必要な機能を洗い出したうえで、それを実現するのに最適な技術スタックを選ぶように意識しています。

## 制作体制
個人制作

## 技術スタック
- Unity 6000.0.39f1
    - UniTask
- C#
- Python
    - Fast API

## 制作期間
約2か月（2025年4月～2025年5月）

## リンク
Geo History本体
- [GitHubリポジトリ](https://github.com/419087/geo-history-unity)

駅情報APIサーバー&地図サーバー
- [GitHubリポジトリ](https://github.com/419087/geo-server)