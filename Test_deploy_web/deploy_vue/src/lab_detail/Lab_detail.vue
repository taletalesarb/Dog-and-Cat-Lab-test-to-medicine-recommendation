<template>
  <div>
    <div class="lab_detail">
      <div class="top_lab_detail">
        <p>2. ข้อมูลห้องปฏิบัติการ</p>
      </div>
      <div class="botton_lab_detail">
        <div class="left_lab_detail">
          <p>
            Submitted sample
            <select v-model="detail_data.vitek_id_card" id="vitek_id">
              <option disabled value>Patient's vitek id</option>
              <option value="GP">GP</option>
              <option value="GN">GN</option>
            </select>
          </p>
          <p>
            Vitek ID card
            <select v-model="detail_data.submitted_sample" id="submitted_sample">
              <option disabled value>submitted sample</option>
              <option value="Urine">Urine</option>
              <option value="Ub mucosa">Ub mucosa</option>
              <option value="Wound">Wound</option>
              <option value="Abscess">Abscess</option>
              <option value="Pustule">Pustule</option>
              <option value="Pleural effusion">Pleural effusion</option>
              <option value="Bite wound">Bite wound</option>
              <option value="Surgical site">Surgical site</option>
              <option value="Abdominal effusion">Abdominal effusion</option>
              <option value="Ear exudate">Ear exudate</option>
              <option value="Unknown">Unknown</option>
              <option value="Other">Other</option>
            </select>
          </p>
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
  name: "lab_detail",
  props: {
    detail_data: Object,
  },
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