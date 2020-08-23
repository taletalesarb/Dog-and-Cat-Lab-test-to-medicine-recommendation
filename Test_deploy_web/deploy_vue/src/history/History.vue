<template>
  <div>
    <div @click="$emit('update', history_data)" class="history">
      <div class="top_history">
        <p>1. ข้อมูลการส่ง และประวัติของตัวอย่าง</p>
      </div>
      <div class="botton_history">
        <div class="left_history">
          <p>Date of sample collection {{history_data.sex}}</p>
          <p>Owner</p>
          <p>
            Species
            <input
              v-model="history_data.species"
              placeholder="Enter patient's specie"
              @change="history_data.species"
            />
          </p>
          <p>
            Sex
            <select v-model="history_data.sex" id="sex_patient" @change="history_data.sex">
              <option disabled value>Patient's sex</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </p>
        </div>
        <div class="right_history">
          <p>Date of submission {{history_data.species}}</p>
          <p>Patient</p>
          <p>
            Breed
            <input
              v-model="history_data.breed"
              placeholder="Enter patient's breed"
              @change="history_data.breed"
            />
          </p>
          <p>Birth date</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "history",
  props: {
    history_data: Object,
  },
  mounted() {
    // console.log(this.history_data);
  },
};
</script>
<style>
.history {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color: grey;
}

.top_history {
  grid-area: 1 / 1 / 2 / 2;
}
.botton_history {
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: -60px;
  margin-left: 20px;
}

.left_history {
  grid-area: 1 / 1 / 2 / 2;
}
.right_history {
  grid-area: 1 / 2 / 2 / 3;
  margin-left: -150px;
}
</style>