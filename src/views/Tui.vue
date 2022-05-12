<template>
  <div class="tui">
    <div id="calendar" style="height: 800px"></div>

    <el-dialog title="提示" :visible.sync="addVisible" width="500px">
      <span>这是一段信息</span>
      <span slot="footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Calendar from "tui-calendar"; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
export default {
  name: "Tui",
  components: {},
  data() {
    return {
      addVisible: false,
      cal: "",
      schedules: [
        {
          id: "1",
          calendarId: "1",
          title: "A schedule",
          category: "time",
          dueDateClass: "",
          start: "2018-05-22T22:30:00+09:00",
          end: "2018-05-23T02:30:00+09:00",
        },
        {
          id: "2",
          calendarId: "1",
          title: "Another schedule",
          category: "time",
          dueDateClass: "",
          start: "2018-05-23T17:30:00+09:00",
          end: "2018-05-24T17:31:00+09:00",
          isReadOnly: true,
        },
      ],
    };
  },
  created() {},
  mounted() {
    // 初始化日历
    this.cal = new Calendar("#calendar", {
      defaultView: "week",
      useCreationPopup: false,
      useDetailPopup: false,
      month: {
          daynames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          startDayOfWeek: 0,
          narrowWeekend: true
      },
      week: {
          daynames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          startDayOfWeek: 0,
          narrowWeekend: true
      }
    });
    this.init()
    this.setData()
  },
  methods: {
    // 初始化数据
    setData() {
      let testData = {
        id: +new Date(),
        title: "title",
        aa: "122",
        isAllDay: false,
        start: new Date("2022-4-25 12:00:00"),
        end: new Date("2022-4-25 14:00:00"),
        category: "time",
        color: "#00a9ff",
        bgColor: "#00a9ff",
        dragBgColor: "#00a9ff",
        borderColor: "#00a9ff",
      };
      // 绘制数据
      this.cal.createSchedules([testData]);
    },
    // 初始化日历事件
    init() {
      this.cal.on({
        clickSchedule: function (e) {
          console.log(e);
        },
        // --- 创建 ---
        beforeCreateSchedule: (e) => {
          console.log(e);
          this.createLesson(e)
        },
        // --- 更新 ---
        beforeUpdateSchedule: (e) => {
          console.log("更新任务", e);
          e.schedule.start = e.start;
          e.schedule.end = e.end;
          this.cal.updateSchedule(
            e.schedule.id,
            e.schedule.calendarId,
            e.schedule
          );
        },
      });
    },
    // 新增课程
    createLesson(e) {
      let schedule = {
        id: +new Date(),
        title: "111111<br /> 222",
        isAllDay: false,
        start: e.start,
        end: e.end,
        category: "time",
        bgColor: "red",
        borderColor: "#999",
        color: "#ffffff",
        customStyle: "background-image: linear-gradient(to right, red , yellow);",
        dueDateClass: "aaaaa", // 
        body: "bbbbb", // 
        location: "ccccc", // 
      };
      this.cal.createSchedules([schedule]);
    }
  },
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
</style>