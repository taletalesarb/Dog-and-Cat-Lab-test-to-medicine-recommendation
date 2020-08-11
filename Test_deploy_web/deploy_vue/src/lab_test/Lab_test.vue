<template>
  <div>
    <div class="lab_test">
      <div class="top_lab_test">
        <p>3. ผลจากห้องปฏิบัติการ (Vitek®):</p>
      </div>
      <div class="botton_lab_test">
        <div class="test_detail">
          <p>Bacterial Species identification</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lab_test"
};
</script>
<style>
.lab_test {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color: grey;
}

.top_lab_test {
  grid-area: 1 / 1 / 2 / 2;
  margin-top: -10px;
}
.botton_lab_test {
  grid-area: 2 / 1 / 3 / 2;
  margin-top: -20px;
  margin-left: 20px;
}
</style>