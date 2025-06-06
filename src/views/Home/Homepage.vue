<template>
    <div id="HomePage">
        <div class="banner">
            <Banner_1/>
        </div>
        <div class="partnerlogo">
            <section class="py-3 py-md-5 py-xl-8">
                <Title :title="Title_1" />
            <div class="container overflow-hidden">
                <PartnerLogo/>
            </div>
            </section>
        </div>
        <div class="Container-Team">
            <section class="py-3 py-md-5 py-xl-8">
                <Title :title="Title_2" />

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
                 <Title :title="Title_3" />
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

        <div class="Category">
            <section class="bg-light py-3 py-md-5 py-xl-8">
                 <Title :title="Title_4" />

                <div class="container">
                    <div class="row">
                    <div class="col-12">
                        <div class="container-fluid mb-3">
                            <div class="row gy-3 gy-md-4">
                                <CateroryCard/>
                            </div>
                        </div>
                        <div class="button-all">
                            <a href="#!" class="btn btn-primary m-0 text-nowrap entry-more">All Soursera -></a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
        <div class="banner">
            <Banner_2/>
        </div>
        <div class="community">
            <section class="bg-light py-5 py-xl-8">
                <Title :title="Title_5" />

                <div class="container overflow-hidden">
                    <div class="row gy-4 gy-md-0 gx-xxl-5 mb-3">
                        <CommunityCard/>
                    </div>
                    <div class="button-all">
                        <a href="#!" class="btn btn-primary m-0 text-nowrap entry-more">All Soursera -></a>
                    </div>
                </div>
            </section>
        </div>
        <div clas="news">
            <section class="bsb-blog-5 py-3 py-md-5 py-xl-8">
                <Title :title="Title_6" />

                <div class="container overflow-hidden ">
                    <div class="row gy-4 gy-md-5 gx-xl-6 gy-xl-6 gx-xxl-9 gy-xxl-9 mb-5">
                        <NewsCard/>
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
import CateroryCard from '@/components/CourceCategory/CateroryCard.vue';
import Banner_2 from '@/components/Banner/Banner_2.vue';
import CommunityCard from '@/components/Community/CommunityCard.vue';
import NewsCard from '@/components/News/NewsCard.vue';
export default{
    name:'AppHomePage',
    components:{
        Banner_1,
        PartnerLogo,
        Title,
        TeamCard,
        CertificateCard,
        CateroryCard,
        Banner_2,
        CommunityCard,
        NewsCard
    },
    data(){
        return {
            Title_1:{
                t1:'Our Partner',t2:'We collaborate with 350+ leading universities and companies.',t3:'Our Partner are our top priority, and we are committed to providing them with the highest level of service.'
            },

            Title_2:{
                t1: 'Our Instructors',
                t2: 'Learn from top instructors and industry experts around the world.',
                t3: 'Our instructors are passionate educators and professionals from world-class universities and organizations, committed to helping you achieve your learning goals.'

            },

            Title_3:{
                t1: 'Our Courses',
                t2: 'Discover courses designed to help you succeed - wherever you are on your learning journey.',
                t3: 'From foundational topics to advanced specializations, our courses are created by leading universities and industry experts to give you the knowledge and skills you need to thrive in today’s fast-changing world.'

            },

            Title_4:{
                t1:'Coursera Thu Duc ',t2:'Discover Coursera',t3:''

            },
            Title_5:{
                t1:'Coursera Thu Duc ',t2:'From the Coursera community',t3:'175+ million people have already joined Coursera'

            },
            Title_6:{
                 t1:'Coursera Thu Duc ',t2:'News Coursera Thu Duc ',t3:''
            }
        }
    }
}
</script>
<style scoped>
.btn{
    background-color: #0056d2;
}
.btn:hover{
    background-color: white;
    color: #0056d2;
}
</style>