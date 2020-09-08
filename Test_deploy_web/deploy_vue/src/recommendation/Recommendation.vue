<template>
  <div>
    <div class="recommendation">
      <div class="rec-title">
        <p>4. Recommendation of antimicrobial choices</p>
      </div>
      <div class="rec-detail">
        <p>Bacterial Species identification</p>
        <!-- <p>- จากการทำ urine quantitative culture บ่งชี้ว่าเป็น ...</p> -->
        <p>- ยาต้านจุลชีพที่แนะนำ ตามลำดับ ได้แก่</p>
        <div class="rec-med">
          <div class="get-med">
            <!-- get med recommendation from api -->
            <p v-for="(med, index) in med_recommend" :key="'med' + index">
              {{ med }}
            </p>
          </div>
          <!-- <p>
            หรือให้ยาต่อเนื่องจนอาการหายสนิท และให้ ยาต่อไปอีก 1-2 สัปดาห์
          </p> -->
        </div>
        <!-- <p>
          แนะนำให้ flush ล้างกระเพาะปัสสาวะด้วย NSS จนปัสสาวะใส
          เพื่อช่วยกำจัด/ลดจำนวนเชื้อในกระเพาะปัสสาวะ
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendation",
  props: {
    med_recommend: Array
  }
};
</script>

<style>
.recommendation {
  color: grey;
  /* margin-top: -420px; */
}
.rec-detail {
  margin-left: 20px;
}
.rec-med {
  margin-left: 20px;
}
</style>
