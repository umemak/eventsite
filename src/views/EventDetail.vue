<template>
    <div class="event">
        <h1>イベント詳細</h1>
        <ul>
            <li>タイトル: {{ title }}</li>
            <li>開催日時: {{ date }}</li>
            <li>開催場所: {{ place }}</li>
            <li>資料: 
                <ul>
                    <li>資料１</li>
                    <li>資料２</li>
                </ul>
            </li>
            <li>コメント: 
                <ul>
                    <li>コメント１</li>
                    <li>コメント２</li>
                </ul>
            </li>
        </ul>
        <button @click="entry">参加エントリー</button>
        <button @click="cancel">参加キャンセル</button>
    </div>
</template>

<script>
export default {
  methods: {
    entry: function() {

      this.$router.push('/entry')
    },
    cancel: function() {

      this.$router.push('/cancel')
    },
  },
}
</script>
