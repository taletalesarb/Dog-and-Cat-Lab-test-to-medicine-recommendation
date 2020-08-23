<template>
  <div id="app">
    <header_hospital />
    <h1>{{history_data.sex}}</h1>
    <history @update="history_data = $event;" :history_data="history_data" />

    <lab_detail @update="detail_data = $event;" :detail_data="detail_data" />
    <lab_test @update="med_lists = $event;" :med_lists="med_lists" :detail_data="detail_data" />
    <recommendation />
  </div>
</template>

<script>
import header_hospital from "./header/Header";
import history from "./history/History";
import lab_detail from "./lab_detail/Lab_detail";
import lab_test from "./lab_test/Lab_test";
import recommendation from "./recommendation/Recommendation";
export default {
  name: "app",
  data() {
    return {
      date_of_sample_collection: "",
      owner: "",

      date_of_submission: "",
      patient: "",

      birth_date: "",

      method_of_collection: "",
      vitek_ast_card: "",
      backterial_species_identification: "",
      history_data: {
        species: "",
        breed: "",
        sex: "",
      },
      detail_data: {
        submitted_sample: "",
        vitek_id_card: "",
      },
      med_lists: [
        {
          med_name: "ESBL",
          SIR: "-",
        },
        {
          med_name: "Ampicillin",
          SIR: "R",
        },
        {
          med_name: "Amoxicillin/clavulanic acid ",
          SIR: "S",
        },
        {
          med_name: "Piperacillin",
          SIR: "I",
        },
        {
          med_name: "Cephalexin",
          SIR: "S",
        },
        {
          med_name: "Cefpodoxime",
          SIR: "S",
        },
        {
          med_name: "Cefovecin",
          SIR: "S",
        },
        {
          med_name: "Ceftiofur",
          SIR: "S",
        },
        {
          med_name: "Imipenem",
          SIR: "S",
        },
        {
          med_name: "Amikacin",
          SIR: "S",
        },
        {
          med_name: "Gentamicin",
          SIR: "S",
        },
        {
          med_name: "Tobramycin",
          SIR: "S",
        },
        {
          med_name: "Enrofloxacin",
          SIR: "R",
        },
        {
          med_name: "Marbofloxacin",
          SIR: "R",
        },
        {
          med_name: "Tetracycline",
          SIR: "R",
        },
        {
          med_name: "Nitrofurantoin",
          SIR: "S",
        },
        {
          med_name: "Chloramphenicol",
          SIR: "R",
        },
        {
          med_name: "Polymyxin B",
          SIR: "N/A",
        },
        {
          med_name: "Rifampin",
          SIR: "N/A",
        },
        {
          med_name: "Sulfamethoxazole/trimethoprim",
          SIR: "R",
        },
      ],
    };
  },
  components: {
    header_hospital,
    history,
    lab_detail,
    lab_test,
    recommendation,
  },
};
</script>

<style>
#app {
  margin-top: 10px;
  margin-left: 300px;
}
</style>