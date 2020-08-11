<template>
  <div>
    <div class="lab_detail">
      <div class="top_lab_detail">
        <p>2. ข้อมูลห้องปฏิบัติการ</p>
      </div>
      <div class="botton_lab_detail">
        <div class="left_lab_detail">
          <p>Submitted sample</p>
          <p>Vitek ID card</p>
        </div>
        <div class="right_lab_detail">
          <p>Method of collection</p>
          <p>Vitek AST card</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lab_detail"
};
</script>
<style>
.lab_detail {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color: grey;
}

.top_lab_detail {
  grid-area: 1 / 1 / 2 / 2;
  margin-top: -10px;
}
.botton_lab_detail {
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: -30px;
  margin-left: 20px;
}

.left_lab_detail {
  grid-area: 1 / 1 / 2 / 2;
}
.right_lab_detail {
  grid-area: 1 / 2 / 2 / 3;
  margin-left: -150px;
}
</style>