<template>
  <div>
    <div class="lab_test">
      <div class="top_lab_test">
        <p>3. ผลจากห้องปฏิบัติการ (Vitek®):</p>
        <div class="test_detail" @click="showMedList">
          <p>
            Bacterial Species identification
            <!-- <input
              v-model="backterial_species_identification"
              placeholder="Enter backterial species identification"
            />-->
          </p>
        </div>
        <div class="botton_lab_test">
          <div class="lab_table">
            <div class="table_left">
              <lab_table id="leftTable" v-if="med_list" v-bind:med_list="med_list" :pos="2" />
            </div>
            <div class="table_right">
              <lab_table id="rightTable" v-if="med_list" v-bind:med_list="med_list" :pos="1" />
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
  data: function () {
    return {
      half: 0,
      left_table: [],
      right_table: [],
      // med_list: [],
    };
  },
  components: {
    lab_table,
  },
  props: {
    med_list: Array,
    backterial_species_identification: String,
  },
  methods: {
    showMedList() {
      console.log("showMedList in test");
      console.log(this.med_list);
    },
  },
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
  max-height: 670px;
  
}

.top_lab_test {
  grid-area: 1 / 1 / 2 / 2;
  margin-top: -10px;
}
.botton_lab_test {
  grid-area: 2 / 1 / 3 / 2;
  margin-top: 0px;
  margin-left: 20px;
  max-height: 500px;
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
  margin-right: 130px;
}
</style>
