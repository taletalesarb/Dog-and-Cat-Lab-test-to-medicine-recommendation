<template>
  <div id="app">
    <div @click="showMedList">
      <header_hospital />
    </div>

    <div>
      <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
      <input v-model="SId" placeholder="Enter ID"/>
      <button type="button" @click="getData(SId)">getData</button>
    </div>

    <history @update="history_data = $event" :history_data="history_data" />

    <div @click="changeVitek">
      <lab_detail @update="detail_data = $event" :detail_data="detail_data" />
    </div>

    <!-- Select med_list to send -->
    <!-- <h1>{{ backterial_species_identification }}</h1> -->
    <p>
      Bacterial Species identification
      <input
        v-model="backterial_species_identification"
        placeholder="Enter backterial species identification"
      />
    </p>

    <lab_test
      id="labTest"
      @update="med_list = $event"
      v-if="med_list"
      v-bind:med_list="med_list"
    />
    <div id ="getRecButton"><button  @click="request_med">get recommend</button></div>
    
    <recommendation
      @click="printBact"
      @update="med_recommend = $event"
      :med_recommend="med_recommend"
    />
  </div>
</template>

<script>
const axios = require("axios").default;
import header_hospital from "./header/Header";
import history from "./history/History";
import lab_detail from "./lab_detail/Lab_detail";
import lab_test from "./lab_test/Lab_test";
import recommendation from "./recommendation/Recommendation";
export default {
  name: "app",
  data() {
    return {
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders:{},
      sortKey: '',
      date_of_sample_collection: "",
      owner: "",
      med_recommend: [],
      date_of_submission: "",
      patient: "",

      birth_date: "",
      med_list: [],
      method_of_collection: "",
      vitek_ast_card: "",
      backterial_species_identification: "Staphylococcus schleiferi",
      history_data: {
        species: "",
        breed: "",
        sex: ""
      },
      detail_data: {
        submitted_sample: "",
        vitek_id_card: "GP"
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
          med_name: "Amoxicillin/clavulanic acid",
          SIR: "N/A"
        },
        {
          med_name: "Ampicillin",
          SIR: "N/A"
        },
        {
          med_name: "Benzyl penicillin",
          SIR: "N/A"
        },
        {
          med_name: "Cefotaxime",
          SIR: "N/A"
        },
        {
          med_name: "Cefovecin",
          SIR: "N/A"
        },
        {
          med_name: "Cefoxitin",
          SIR: "N/A"
        },
        {
          med_name: "Cefpodoxime",
          SIR: "N/A"
        },
        {
          med_name: "Ceftriaxone",
          SIR: "N/A"
        },
        {
          med_name: "Cephalothin",
          SIR: "N/A"
        },
        {
          med_name: "Chloramphenicol",
          SIR: "N/A"
        },
        {
          med_name: "Clindamycin",
          SIR: "N/A"
        },
        {
          med_name: "Enrofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Erythromycin",
          SIR: "N/A"
        },
        {
          med_name: "Fusidic acid",
          SIR: "N/A"
        },
        {
          med_name: "Gentamicin",
          SIR: "N/A"
        },
        {
          med_name: "Inducible clindamycin",
          SIR: "N/A"
        },
        {
          med_name: "Levofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Linezolid",
          SIR: "N/A"
        },
        {
          med_name: "Marbofloxacin",
          SIR: "N/A"
        },
        {
          med_name: "Mupirocin",
          SIR: "N/A"
        },
        {
          med_name: "Nitrofurantoin",
          SIR: "N/A"
        },
        {
          med_name: "Oxacillin",
          SIR: "N/A"
        },
        {
          med_name: "Rifampicin",
          SIR: "N/A"
        },
        {
          med_name: "Sulfamethoxazole/trimethoprim",
          SIR: "N/A"
        },
        {
          med_name: "Tetracycline",
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
    this.med_list = this.med_lists_GP;
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
    },
    printBact() {
      console.log("printBact");
      console.log(this.backterial_species_identification);
    },
    request_med() {
      console.log("===> req_data <===");
      let req_data = {};
      var med_table;
      var req_url;
      req_data.species = this.history_data.species;
      //req_data.submitted_sample = this.detail_data.submitted_sample;
      req_data.bact_species_1 = this.backterial_species_identification;
      if (this.detail_data.vitek_id_card == "GN") {
        med_table = this.med_lists_GN;
        req_url = 'http://172.0.0.1:5000/GN';
      } else if (this.detail_data.vitek_id_card == "GP") {
        med_table = this.med_lists_GP;
        req_url = '172.16.0.1:5000/GP';
      } else {
        return;
      }
      for (let i = 0; i < med_table.length; i++) {
        req_data[med_table[i].med_name] = med_table[i].SIR;
      }
      console.log("===> req_data <===");
      console.log(req_data);
      axios
        .post(req_url, req_data)
        .then(response => {
          console.log("response");
          console.log(response);
          this.med_recommend = response.data.Med;
          console.log(this.med_recommend);
        })
        .catch(function(error) {
          // console.log("error");
          console.log(error);
          if (error) {
            alert(error);
          }
        });
    },
    sortBy: function (key) {
      var vm = this
      vm.sortKey = key
      vm.sortOrders[key] = vm.sortOrders[key] * -1
    },
    getData(Aid){
      const dataSet = this.parse_csv
      for (const csv in dataSet){
        var med 
        if (dataSet[csv].id == Aid){
            this.backterial_species_identification = dataSet[csv].bact_species_1
            this.history_data.species = dataSet[csv].species
            this.detail_data.vitek_id_card = dataSet[csv].vitek_id
          if (this.detail_data.vitek_id_card == "GN") {
            for(const i in this.med_lists_GN)
              {
                med = this.med_lists_GN[i].med_name
                console.log(dataSet[csv][med])
                if (dataSet[csv][med]=== "") 
                {
                  this.med_lists_GN[i].SIR = "N/A"
                }
                else{
                  this.med_lists_GN[i].SIR = dataSet[csv][med]
                }
                
              }
            }
          else{
            for(const i in this.med_lists_GP)
            {
              med = this.med_lists_GP[i].med_name
              if (dataSet[csv][med]=== "") 
              {
                this.med_lists_GP[i].SIR = "N/A"
              }
              else{
                this.med_lists_GP[i].SIR = dataSet[csv][med]
              }
              
            }
          }
          
        }
      }

      return;
    },
    
    csvJSON(csv){
      var vm = this
      var lines = csv.split("\n")
      var result = []
      var headers = lines[0].split(",")
      vm.parse_header = lines[0].split(",") 
      lines[0].split(",").forEach(function (key) {
        vm.sortOrders[key] = 1
      })
      
      lines.map(function(line, indexLine){
        if (indexLine < 1) return // Jump header line
        
        var obj = {}
        var currentline = line.split(",")
        
        headers.map(function(header, indexHeader){
          obj[header] = currentline[indexHeader]
        })
        
        result.push(obj)
      })
      
      result.pop() // remove the last item because undefined values
      
      return result // JavaScript object
    },
    loadCSV(e) {
      var vm = this
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parse_csv = vm.csvJSON(csv)
          
        };
        reader.onerror = function(evt) {
          if(evt.target.error.name == "NotReadableError") {
            alert("Canno't read file !");
          }
        };
      } else {
        alert('FileReader are not supported in this browser.');
      }
    }
  }
};
</script>

<style>
#app {
  margin-top: 10px;
  margin-left: 300px;
}
#p {
  color: grey;
}
#getRecButton {
  /* margin: 50px; */
}
</style>
