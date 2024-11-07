<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostsTableSeeder extends Seeder
{
    public function run()
    {
        $posts = [
            [
                title: "Primul Party Fitness Urban cu Chingi Expert din România",
                content: `Eveniment găzduit de Dorobat Doru \n
                  Locație: Parcul Tineretului Orastiei \n
                  Durată: 1 ora \n
                  Public  · Oricine, cu sau fără cont de Facebook \n
                  Te invit sa faci miscare si sa te distrezi alaturi de noi pe muzica lui Dj Roby & Dj Broklyn la antrenamentul FITNESS URBAN cu nr 50 din 50 propuse! \n
                  Parcul Tineretului Orastie ora 10:00.
                `,
                imageURL: "https://scontent.fomr1-1.fna.fbcdn.net/v/t39.30808-6/457371899_7901652436626779_4681547375362405784_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=75d36f&_nc_ohc=jXYz_R5KnGkQ7kNvgEpa5WO&_nc_zt=23&_nc_ht=scontent.fomr1-1.fna&_nc_gid=AIKQ-ELocEY9a9pesIsiw9e&oh=00_AYCHMxPnyPBosuOQT3Xzpa1ZOj6ExC3__oFHfHbEqvYk-g&oe=6732C39F",
                link: "https://www.facebook.com/events/312934101364635?locale=ro_RO"
              ],
              [
                title: "Primul Party Fitness Urban cu Chingi Expert din România",
                content: `Eveniment găzduit de Fitness Urban şi Chingi Expert \n
                  Locație: Parcul Cetăţii Deva \n
                  Durată: 2 ore \n
                  Public  · Oricine, cu sau fără cont de Facebook \n
                  Iți place sportul, distracția și provocările? \n
                  Atunci hai alături de noi sâmbătă 9 martie ora 11:00 în Parcul Cetate Deva la Primul Party Fitness Urban cu Chingi Expert din România!
                `,
                imageURL: "https://scontent.fomr1-1.fna.fbcdn.net/v/t39.30808-6/431166112_794633752708309_6519151989897721146_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=75d36f&_nc_ohc=egWVc68KLN8Q7kNvgHeukAG&_nc_zt=23&_nc_ht=scontent.fomr1-1.fna&_nc_gid=AxvllShzOt0l8A-y3ocNtyq&oh=00_AYAeziY1GzMimGPwPkZbl4K1d_nCUsaMfs9OKwOffFXVVw&oe=6732BACD",
                link: "https://www.facebook.com/events/312934101364635?locale=ro_RO"
              ],
              [
                title: "Eveninment Fitness Urban la Sala Sporutilor din Deva!",
                content: `𝐈𝐧 𝐚𝐭𝐞𝐧ț𝐢𝐚 𝐥𝐨𝐜𝐮𝐢𝐭𝐨𝐫𝐢𝐥𝐨𝐫 𝐨𝐫𝐚𝐬𝐮𝐥𝐮𝐢 𝐃𝐞𝐯𝐚,\n
                  În atenția societății civile,\n
                  În atenția autorităților locale,\n
                  În atenția reprezentanților partidelor politice,\n
                  Întrucât, în urma desfășurării evenimentului ”𝐒𝐜𝐡𝐢𝐦𝐛𝐚𝐫𝐞 𝐩𝐫𝐢𝐧 𝐦𝐢𝐬𝐜𝐚𝐫𝐞”, organizat de comunitatea Fitness Urban duminică, 17 decembrie 2023, în 𝐒𝐚𝐥𝐚 𝐒𝐩𝐨𝐫𝐭𝐮𝐫𝐢𝐥𝐨𝐫 din Deva, a fost lansată în spațiul public 𝐨 𝐬𝐞𝐫𝐢𝐞 𝐝𝐞 𝐧𝐞𝐚𝐝𝐞𝐯ă𝐫𝐮𝐫𝐢 care aduc atingere atât organizatorilor, cât și tuturor reprezentanților acestei mișcări, vă rugăm să primiți acest Comunicat`,
                imageURL: "https://scontent.fomr1-1.fna.fbcdn.net/v/t39.30808-6/412297742_6752488928209808_3444128251261131942_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=347GOjPf4sIQ7kNvgGkXLYT&_nc_zt=23&_nc_ht=scontent.fomr1-1.fna&_nc_gid=AQbXM0VLF3Hyil97HlMwf4Q&oh=00_AYCX-cXmyTTfS5GMArQEMYhPxMFWD_OWdHBtL8jkYg1Sjw&oe=6732E2FC",
                link: "https://www.facebook.com/FitnessUrbanRomania/posts/pfbid031U9JncSD3iHPm3DYxokHQTuLAs5fL7yjL9QPhkGpwMRXV3hpeFu5pppeTPVH1hrXl"
              ]
        ];

        foreach ($posts as $post) {
            Post::create($post);
        }
    }
}
