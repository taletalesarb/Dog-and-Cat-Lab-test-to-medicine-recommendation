<template>
  <div>
    <table class="tg">
      <thead>
        <tr>
          <th class="tg-title" rowspan="2">Antimicrobials pos{{pos}}</th>
          <th class="tg-title" colspan="2" @click="showMedList">Results</th>
        </tr>
        <tr>
          <td class="tg-title">MIC</td>
          <td class="tg-title">S/I/R</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value,index) in med_list" :key="'SIR_value'+index">
          <td class="tg-med" v-if="(index+1) % 2 == pos-1">{{value.med_name}}</td>
          <td class="tg-MIC" v-if="(index+1) % 2 == pos-1"></td>
          <td class="tg-SIR" v-if="(index+1) % 2 == pos-1">
            <select id="SIR_value" v-model="value.SIR">
              <option value="N/A" selected="selected">N/A</option>
              <option value="S">S</option>
              <option value="I">I</option>
              <option value="R">R</option>
              <option value="*S">*S</option>
              <option value="*I">*I</option>
              <option value="*R">*R</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*+">*+</option>
              <option value="*-">*-</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "lab_table",
  data() {
    return {};
  },
  props: {
    med_list: Array,
    pos: Number,
  },
  mounted() {
    console.log("Lab table -->>med_lists ");
    // console.log(this.med_list);
    console.log(this.pos);
  },
  methods: {
    showMedList() {
      console.log("showMedList in table");
      console.log(this.med_list);
    },
  },
};
</script>

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  width: 400px;
}
.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-med {
  text-align: left;
  vertical-align: center;
  width: 500px;
  max-width: 500px;
}
.tg .tg-MIC {
  text-align: center;
  vertical-align: center;
  width: 40px;
}
.tg .tg-SIR {
  text-align: center;
  vertical-align: center;
  width: 40px;
}
.tg .tg-title {
  text-align: center;
  vertical-align: center;
}
</style>