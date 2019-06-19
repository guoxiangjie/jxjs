<template>
  <div id="app" onselectstart="return false;">
    <mu-container class>
      <mu-row>
        <mu-col span="12">
          <mu-appbar style="width: 100%;" color="primary">
            绩效计算工具
            <mu-button flat slot="right">{{data | datrfmt('HH:mm:ss')}}</mu-button>
          </mu-appbar>
        </mu-col>
        <mu-col span="12">
          <mu-card>
            <mu-card-header title="首先，需要确定一下配置项，这很重要！">
              <mu-icon style="margin-right:10px" slot="avatar" value="info" color="red"></mu-icon>
            </mu-card-header>
          </mu-card>
          <mu-card class="action">
            <mu-row>
              <mu-col span="6">
                <mu-row align-items="center">
                  <mu-col style="color:#999" span="2">当前月份</mu-col>
                  <mu-col style="color:#2196f3" span="6">
                    <mu-date-input
                      icon="today"
                      v-model="value10"
                      label="选择月份"
                      type="month"
                      label-float
                      full-width
                    ></mu-date-input>
                  </mu-col>
                </mu-row>
              </mu-col>
              <mu-col span="6">
                <mu-row align-items="center">
                  <mu-col style="color:#999" span="2">工作日</mu-col>
                  <mu-col style="color:#2196f3" span="6">
                    <mu-date-input v-model="value2" label="总工作天数" label-float full-width></mu-date-input>
                  </mu-col>
                </mu-row>
              </mu-col>
            </mu-row>
          </mu-card>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "app",
  data() {
    return {
      data: new Date()
    };
  },
  created() {
    this.updataDate();
  },

  methods: {
    updataDate() {
      setInterval(() => {
        this.data = new Date();
      }, 1000);
    }
  },
  components: {}
};
</script>
<style lang="stylus">
body {
  background: #f2f2f2;

  .action {
    padding: 20px;
  }
}
</style>
