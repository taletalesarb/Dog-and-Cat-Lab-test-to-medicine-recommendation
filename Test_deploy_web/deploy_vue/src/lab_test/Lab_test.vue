<template>
  <div>
    <div class="lab_test">
      <div class="top_lab_test">
        <p>3. ผลจากห้องปฏิบัติการ (Vitek®):</p>
        <div class="test_detail">
          <p>Bacterial Species identification</p>
        </div>
        <div class="botton_lab_test">
          <div class="lab_table">
            <div class="table_left">
              <lab_table v-if="med_lists" v-bind:med_lists="left_table" />
            </div>
            <div class="table_right">
              <lab_table v-if="med_lists" v-bind:med_lists="right_table" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lab_table from "../lab_table/Lab_table";
export default {
  name: "lab_test",
  data: function() {
    return {
      half: 0,
      left_table: [],
      right_table: []
    };
  },
  components: {
    lab_table
  },
  props: {
    med_lists: Array
  },
  mounted() {
    this.half = Math.ceil(this.med_lists.length / 2);
    this.left_table = this.med_lists.slice(0, this.half);
    this.right_table = this.med_lists.slice(-this.half);
  }
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
  margin-top: 0px;
  margin-left: 20px;
}
.test_detail {
  margin-left: 20px;
}
.lab_table {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.table_left {
  grid-area: 1 / 1 / 2 / 2;
}
.table_right {
  grid-area: 1 / 2 / 2 / 3;
  margin-left: -130px;
}
</style>