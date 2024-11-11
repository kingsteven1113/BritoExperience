import React, {useContext} from 'react'
import Image1 from '../../assets/PlanePhoto.jpg'
import Image2 from '../../assets/Image2.jpg'
import Image3 from '../../assets/Image3.jpg'
import Image4 from '../../assets/Image4.jpg'
import Image5 from '../../assets/Image5.jpg'

const imageFiles = require.context('../../assets', false, /\.(png|jpe?g|gif)$/);

const LandingPage = () => {
    const images = imageFiles.keys().map((imagePath) => {
        const imageSrc = imageFiles(imagePath); // import image dynamically
        const imageName = imagePath.replace('./', '').replace(/\.\w+$/, ''); // remove './' and file extension
        
        return (
          <div key={imageName}>
            <img src={imageSrc} alt={imageName} />
            <p>{imageName}</p>
          </div>
        );
      });
    
      return (
        <div className="image-gallery">
          {images}
        </div>
      );

}

export default LandingPage;