<template>
  <div id="app">
    <div @click="showMedList">
      <header_hospital />
    </div>

    <!-- <h1 v-if="detail_data.vitek_id_card == 'GP'">{{detail_data.vitek_id_card}}</h1> -->
    <history @update="history_data = $event" :history_data="history_data" />
    <div @click="changeVitek">
      <lab_detail @update="detail_data = $event" :detail_data="detail_data" />
    </div>

    <!-- Select med_list to send -->
    <lab_test
      id="labTest"
      @update="med_list = $event"
      v-if="med_list"
      v-bind:med_list="med_list"
    />
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
      date_of_sample_collection: " ",
      owner: "",

      date_of_submission: "",
      patient: "",

      birth_date: "",
      med_list: [],
      method_of_collection: "",
      vitek_ast_card: "",
      backterial_species_identification: "",
      history_data: {
        species: "",
        breed: "",
        sex: ""
      },
      detail_data: {
        submitted_sample: "",
        vitek_id_card: "GN"
      },
      med_lists_GN: [
        {
          med_name: "Amikacin",
          SIR: "N/A"
        },
        {
          med_name: "Amoxicillin/clavulanic acid",
          SIR: "N/A"
        },
        {
          med_name: "Cefixime",
          SIR: "N/A"
        },
        {
          med_name: "Cefovecin",
          SIR: "N/A"
        },
        {
          med_name: "Ceftriaxone",
          SIR: "N/A"
        },
        {
          med_name: "Cephalexin",
          SIR: "N/A"
        },
        {
          med_name: "Colistin (polymyxin E)",
          SIR: "N/A"
        },
        {
          med_name: "Doxycycline",
          SIR: "N/A"
        },
        {
          med_name: "Enrofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Fosfomycin",
          SIR: "N/A"
        },
        {
          med_name: "Gentamicin",
          SIR: "N/A"
        },
        {
          med_name: "Imipenem",
          SIR: "N/A"
        },
        {
          med_name: "Marbofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Nitrofurantoin",
          SIR: "N/A"
        },
        {
          med_name: "Piperacillin-tazobactam",
          SIR: "N/A"
        },
        {
          med_name: "Sulfamethoxazole",
          SIR: "N/A"
        }
      ],
      med_lists_GP: [
        {
          med_name: "Amikacin",
          SIR: "N/A"
        },
        {
          med_name: "Amoxicillin/clavulanic acid",
          SIR: "N/A"
        },
        {
          med_name: "Azithromycin",
          SIR: "N/A"
        },
        {
          med_name: "Cefazolin",
          SIR: "N/A"
        },
        {
          med_name: "Cefixime",
          SIR: "N/A"
        },
        {
          med_name: "Cefovecin",
          SIR: "N/A"
        },
        {
          med_name: "Ceftriaxone",
          SIR: "N/A"
        },
        {
          med_name: "Cephalexin",
          SIR: "N/A"
        },
        {
          med_name: "Clindamycin",
          SIR: "N/A"
        },
        {
          med_name: "Doxycycline",
          SIR: "N/A"
        },
        {
          med_name: "Enrofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Gentamicin",
          SIR: "N/A"
        },
        {
          med_name: "Marbofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Nitrofurantoin",
          SIR: "N/A"
        },
        {
          med_name: "Pradofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Rifampicin",
          SIR: "N/A"
        },
        {
          med_name: "Sulfamethoxazole",
          SIR: "N/A"
        },
        {
          med_name: "Vancomycin",
          SIR: "N/A"
        }
      ]
    };
  },
  components: {
    header_hospital,
    history,
    lab_detail,
    lab_test,
    recommendation
  },
  mounted() {
    this.med_list = this.med_lists_GN;
  },
  methods: {
    changeVitek() {
      if (this.detail_data.vitek_id_card == "GN") {
        console.log("-> GN <-");
        this.med_list = this.med_lists_GN;
        // document.getElementById("labTest").med_list = "med_lists_GN";
        console.log(this.med_list);
      } else if (this.detail_data.vitek_id_card == "GP") {
        console.log("-> GP <-");
        this.med_list = this.med_lists_GP;
        console.log(this.med_list);
        // document.getElementById("labTest").med_list = "med_lists_GP";
      }
    },
    showMedList() {
      console.log("showMedList in App");
      console.log(this.med_list);
    }
  }
};
</script>

<style>
#app {
  margin-top: 10px;
  margin-left: 300px;
}
</style>
