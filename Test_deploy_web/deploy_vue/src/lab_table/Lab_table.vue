<template>
  <div>
    <table class="tg">
      <thead>
        <tr>
          <th class="tg-title" rowspan="2">Antimicrobials</th>
          <th class="tg-title" colspan="2">Results</th>
        </tr>
        <tr>
          <td class="tg-title">MIC</td>
          <td class="tg-title">S/I/R</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="value in med_lists" :key="value">
          <td class="tg-med">{{value.med_name}}</td>
          <td class="tg-MIC">>=320</td>
          <td class="tg-SIR">{{value.SIR}}</td>
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
    med_lists: Array
  },
  mounted() {
    console.log("-->>med_lists");
    console.log(med_lists);
  }
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