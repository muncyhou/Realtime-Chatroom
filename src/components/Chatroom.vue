<script setup>
import { ref, watch, nextTick, onMounted } from "vue";
import { writeUserMsg, getRealTimeUserData } from "../utils/firebase";

const userName = ref("");
const msg = ref("");
const status = ref(false);
const realTimeUserData = ref([]);
const refMsg = ref(null);

watch(userName, () => {
  status.value = false;
});

const confirmUserName = () => {
  status.value = true;

  nextTick(() => {
    refMsg.value.focus();
  });
};

const sendMsg = () => {
  if (msg.value === "") return;

  const time = Date.now();

  writeUserMsg(userName.value, msg.value, time);

  msg.value = "";
};

const firstLetter = (chatroomUserName) => chatroomUserName.substr(0, 1);

const transTimestamp = (timestamp) => {
  const now = new Date(parseInt(timestamp));
  const year = now.getFullYear();
  const month = transTenDigit(now.getMonth() + 1);
  const date = transTenDigit(now.getDate());
  const clock = now.getHours() > 12 ? "下午" : "上午";
  const hour =
    now.getHours() > 12
      ? transTenDigit(now.getHours() - 12)
      : transTenDigit(now.getHours());
  const min = transTenDigit(now.getMinutes());
  const second = transTenDigit(now.getSeconds());

  return `${year}/${month}/${date} ${clock} ${hour}:${min}:${second}`;
};

const transTenDigit = (num) => (num < 10 ? `0${num}` : num);

const isUser = (chatroomUserName) =>
  chatroomUserName === userName.value && status.value;

onMounted(() => {
  getRealTimeUserData(realTimeUserData);
});
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="grid grid-cols-3 gap-4">
      <div
        class="col-span-2 max-h-[calc(100vh-2rem)] overflow-y-auto rounded border p-3"
      >
        <form class="flex" @submit.prevent="sendMsg">
          <input
            type="text"
            v-model.trim="msg"
            class="-mr-px flex-auto rounded-l border-gray-300 disabled:bg-gray-200"
            :disabled="!status"
            ref="refMsg"
          />
          <button
            type="submit"
            class="rounded-r border border-gray-300 p-2 text-gray-500 transition-colors hover:bg-gray-500 hover:text-white focus:outline-0 focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100/95 disabled:hover:text-gray-500"
            :disabled="!status"
          >
            送出
          </button>
        </form>

        <div
          class="mt-4 flex"
          :class="{ 'flex-row-reverse': isUser(item.userName) }"
          v-for="(item, key) in realTimeUserData"
          :key="key"
        >
          <div
            class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-extrabold text-gray-500"
          >
            {{ firstLetter(item.userName) }}
          </div>

          <div
            class="flex flex-auto flex-col"
            :class="[isUser(item.userName) ? 'mr-3 items-end' : 'ml-3']"
          >
            <div
              class="mb-2 flex items-end"
              :class="{ 'flex-row-reverse': isUser(item.userName) }"
            >
              <h3 class="text-xl font-bold">{{ item.userName }}</h3>
              <span
                class="mb-1 ml-2 text-sm text-gray-500"
                :class="[isUser(item.userName) ? 'mr-2' : 'ml-2']"
              >
                {{ transTimestamp(item.time) }}
              </span>
            </div>

            <p
              class="w-3/4 rounded bg-gray-100 p-2"
              :class="[
                isUser(item.userName)
                  ? 'bg-blue-400 text-white'
                  : 'bg-gray-100',
                { 'text-right': isUser(item.userName) },
              ]"
            >
              {{ item.msg }}
            </p>
          </div>
        </div>
      </div>

      <div class="self-start rounded border p-3">
        <form @submit.prevent="confirmUserName" class="flex flex-col">
          <label for="userName" class="mb-2">輸入使用者名稱</label>
          <input
            type="text"
            id="userName"
            v-model.trim="userName"
            class="mb-2 rounded border-gray-300"
          />
          <p class="mb-2 text-sm text-gray-500">請輸入個人姓名開始使用聊天室</p>
          <button
            type="submit"
            class="rounded border border-blue-500 p-2 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white focus:outline-0 focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100/95 disabled:text-gray-500 disabled:hover:text-gray-500"
            :disabled="!userName"
          >
            開始使用
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
