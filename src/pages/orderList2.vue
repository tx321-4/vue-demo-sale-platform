<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection
          :selections="products"
          @on-change="productChange"
        ></v-selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <v-date-picker @on-change="getStartDate"></v-date-picker>
      </div>
      <div class="order-list-option">
        结束日期：
        <v-date-picker @on-change="getEndDate"></v-date-picker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query" />
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th
            v-for="(head, index) in tableHeads"
            :key="index"
            @click="changeOrderType(head)"
            :class="{ active: head.active }"
          >
            {{ head.label }}
          </th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="(head, index) in tableHeads" :key="index">
            {{ item[head.key] }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderlist2',
  data () {
    return {
      products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      currentOrder: 'asc',
      tableData: []
    }
  },
  watch: {
    query () {
      this.getList()
    }
  },
  methods: {
    productChange (obj) {
      this.productId = obj.value
      this.getList()
    },
    getList () {

    },
    getStartDate () {

    },
    getEndDate () {

    },
    changeOrderType () {

    }
  }
}
</script>

<style>
</style>
