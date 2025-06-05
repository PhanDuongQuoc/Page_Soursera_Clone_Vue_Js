<template>
    <div id="HomePage">
        <div class="banner">
            <Banner_1/>
        </div>
        <div class="partnerlogo">
            <section class="py-3 py-md-5 py-xl-8">
                <Title/>
            <div class="container overflow-hidden">
                <PartnerLogo/>
            </div>
            </section>
        </div>
        <div class="Container-Team">
            <section class="py-3 py-md-5 py-xl-8">
                <Title/>

            <div class="container overflow-hidden">
                <div class="row gy-4 gy-lg-0 mb-3">
                    <TeamCard/>
                </div>
                <div class="button-all">
                    <a href="#!" class="btn btn-primary m-0 text-nowrap entry-more">All Soursera -></a>
                </div>
            </div>
            </section>
        </div>
        <div class="Certificate">
            <section class="py-3 py-md-5 py-xl-8">
                <Title/>
            <div class="container overflow-hidden">
                <div class="row gy-4 gy-lg-0">
                    <CertificateCard/>

                </div>
                <div class="button-all">
                    <a href="#!" class="btn btn-primary m-0 text-nowrap entry-more">All Soursera -></a>
                </div>
                
            </div>
            </section>
        </div>
    </div>
</template>

<script>
import Banner_1 from '@/components/Banner/Banner_1.vue';
import Title from '@/components/Title/Title.vue';
import TeamCard from '@/components/Team/TeamCard.vue';
import PartnerLogo from '@/components/Partner/PartnerLogo.vue';
import CertificateCard from '@/components/Certificate/CertificateCard.vue';
export default{
    name:'AppHomePage',
    components:{
        Banner_1,
        PartnerLogo,
        Title,
        TeamCard,
        CertificateCard
    }
}
</script>
<style scoped>
.btn{
    background-color: #0056d2;
}
</style>