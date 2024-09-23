import {ref,reactive} from 'vue'
import axios from 'axios'

export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    
    async function getDog() {
        try {
            let request = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            // console.log(request.data)
            dogList.push(request.data.message)
        }catch(error) {
            alert(error)
        }
    }

    return {dogList,getDog}
}

