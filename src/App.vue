<template>
  <div id="nav">
    <router-link to="/">Top</router-link> |
    <router-link to="/cancel">キャンセル確認</router-link> |
    <router-link to="/entry">エントリー確認</router-link> |
    <router-link to="/create">イベント作成</router-link> |
    <router-link to="/event">イベント詳細</router-link> |
    <router-link to="/edit">イベント編集</router-link> |
    <router-link to="/search">検索</router-link> |
    <router-link to="/login">ログイン</router-link> |
    <router-link to="/mypage">マイページ</router-link>
  </div>
  <router-view/>
</template>
