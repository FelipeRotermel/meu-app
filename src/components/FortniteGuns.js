import { ItemFortnite } from './src/components/ItemFortnite';

export default class FortniteGuns extends Component {
    state = {
        guns: [
            {nome: 'ASSAULT RIFLE', dano:'36'},
            {nome: 'MAKESHIFT RIFLE', dano:'33'},
            {nome: 'PRIMAL RIFLE', dano:'36'},
           ]
    }
    render(){
        <View>
            <FlatList data={this.state.guns} renderItem={({ item }) => 
                <ItemFortnite/>
            />
        </View>
    }
}