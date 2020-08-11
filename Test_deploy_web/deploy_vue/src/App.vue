<template>
  <div id="app">
    <header_hospital />
    <history />
    <lab_detail />
    <lab_test />
  </div>
</template>

<script>
import header_hospital from "./header/Header";
import history from "./history/History";
import lab_detail from "./lab_detail/Lab_detail";
import lab_test from "./lab_test/Lab_test";
export default {
  name: "app",
  data() {
    return {
      date_of_sample_collection: "",
      owner: "",
      species: "",
      sex: "",
      date_of_submission: "",
      patient: "",
      breed: "",
      birth_date: "",
      submitted_sample: "",
      vitek_id_card: "",
      method_of_collection: "",
      vitek_ast_card: "",
      backterial_species_identification: "",
      medicine: [
        {
          name: "", //med name
          value: "" //SIR
        },
        {
          name: "", //med name
          value: "" //SIR
        },
        {
          name: "", //med name
          value: "" //SIR
        },
        {
          name: "", //med name
          value: "" //SIR
        },
        {
          name: "", //med name
          value: "" //SIR
        },
        {
          name: "", //med name
          value: "" //SIR
        }
      ]
    };
  },
  components: {
    header_hospital,
    history,
    lab_detail,
    lab_test
  }
};
</script>

<style>
#app {
  margin-top: 10px;
  margin-left: 300px;
}
</style>