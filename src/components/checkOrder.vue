<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">支付成功</div>
      <div class="button" @click="checkStatus">支付失败</div>
      <div class="buttton"></div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList"
      >购买成功！</this-dialog
    >
    <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList"
      >购买失败！</this-dialog
    >
  </div>
</template>

<script>
import Dialog from './base/dialog'
import { CheckOrder } from '@/api/check'
export default {
  name: 'CheckOrder',
  components: {
    thisDialog: Dialog
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number]
    }
  },
  methods: {
    checkStatus () {
      CheckOrder({ orderId: this.orderId }).then((res) => {
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      }, (err) => {
        console.log(err)
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    toOrderList () {
      this.$router.push({ path: '/orderList' })
    }

  }
}
</script>

<style>
</style>
