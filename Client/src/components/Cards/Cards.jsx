import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar'

export default function Cards({characters,onClose,onSearch}) {
   return <div className="container">
      <SearchBar onSearch={onSearch}/>
      {
         characters.map((data)=>{
            return (
                  <Card
                  key={data.id} 
                  id={data.id}
                  name={data.name}
                  status={data.status}
                  species={data.species}
                  gender={data.gender}
                  origin={data.origin.name}
                  image={data.image}
                  onClose={onClose}
                  />
            )
         })
      }
   </div>;
}
