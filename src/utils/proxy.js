import { reactive, computed, watchEffect } from 'vue';
export default function proxy() {
  let obj = reactive({
    count: 1
  });
  let double = computed(() => obj.count * 2);//computed缓存响应count修改得到double
  obj.count = 2;//修改了count

  watchEffect(() => {
    console.log('obj.count 被修改了:>> ', obj.count);
    console.log('double.value 被修改了:>> ', double.value);
  });
}
