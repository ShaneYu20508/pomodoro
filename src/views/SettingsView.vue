<template>
  <v-container class="container">
    <v-row>
      <v-col cols="12">
        <h1 class="text text-center">鈴聲設定</h1>
      </v-col>
      <v-col cols="12">
        <v-radio-group inline v-model="notify">
          <v-radio label="開啟" :value="true"></v-radio>
          <v-radio label="關閉" :value="false"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <h1 class="text text-center">鈴聲設定</h1>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>試聽</th>
              <th>選擇</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alarm in alarms" :key="alarm.id">
              <td>{{ alarm.name }}</td>
              <td>
                <audio :src="alarm.file" controls></audio>
              </td>
              <td>
                <v-radio-group v-model="selectedAlarm">
                  <v-radio :value="alarm.id"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarm, notify } = storeToRefs(settings)
</script>

<style scoped>
/* scoped :deep 只影響選取的 class，並且讓他吃不到其他元素的影響 */
:deep(.v-selection-control-group.v-selection-control-group--inline) {
margin: auto;
}

.text{
color: rgb(246, 255, 0);
-webkit-text-stroke: 1px black;
}
</style>
