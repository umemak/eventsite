<template>
    <div class="mypage">
        <h1>マイページ</h1>
        <ul>
            <li>作成済みイベント:
                <ul>
                    <li>イベント１</li><button @click="eventEdit">編集</button>
                    <li>イベント２</li><button @click="eventEdit">編集</button>
                </ul>
            </li>
            <li>エントリー済みイベント:
                <ul>
                    <li>イベント１</li>
                    <li>イベント２</li>
                </ul>
            </li>
        </ul>
        <button @click="eventCreate">イベント作成</button>
    </div>
</template>

<script>
export default {
  methods: {
    eventEdit: function() {

      this.$router.push('/edit')
    },
    eventCreate: function() {

      this.$router.push('/create')
    },
  },
}
</script>
