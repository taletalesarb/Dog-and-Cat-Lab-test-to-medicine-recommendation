<template>
  <div>
    <div class="header">
      <div class="logo_hospital">
        <!-- <img src="../assets/logo_hospital.png" alt="logo" /> -->
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div class="header_detail">
        <div class="doctor_detail">
          <h4>รายงานผลตรวจห้องปฏิบัติการจุลชีววิทยา</h4>
          <h4>Results of Antimicrobial Susceptibility Testing (AST)</h4>
          <h4>HN 61010456 Clinician สพ.ธนวิชญ์</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header_hospital"
};
</script>
<style>
.header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.logo_hospital {
  grid-area: 1 / 1 / 2 / 2;
}
.header_detail {
  grid-area: 1 / 2 / 2 / 3;
  background-color: rgb(226, 226, 226);
  max-width: 600px;
  margin-left: -150px;
}
.doctor_detail {
  margin-left: 120px;
}
</style>