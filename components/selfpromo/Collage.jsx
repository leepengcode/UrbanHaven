import React from "react";

const Collage = () => {
  return (
    <div className="flex justify-center">
      <img
        src="https://zillowstatic.com/bedrock/app/uploads/sites/15/Insane-Apartment-Amenities-That-Celebs-Love-1-4-HERO.jpg"
        alt="Luxury"
        className="lg:max-w-[600px] max-w-[300px] max-h-[400px] object-cover self_promo_img_left"
      />
      <img
        src="https://cdn.prod.website-files.com/62bc621399f5713af580f208/64ac85247cd58fe4ff623904_Woman%20sitting%20on%20Ori%20Cloud%20Bed%20in%20her%20Semi-Furnished%20apartment.JPG"
        alt="Comfy"
        className="lg:max-w-[600px] max-w-[300px] max-h-[400px] object-cover left-[23%] self_promo_img_center absolute z-40"
      />
      <img
        src="https://www.fieldstoneblacksburg.com/wp-content/uploads/pet-friendly-apartments-blacksburg.webp"
        alt="Pet friendly"
        className="lg:max-w-[600px] max-w-[300px] max-h-[400px] object-cover left-[46%] self_promo_img_center absolute z-30"
      />
      <img
        src="https://rentforevent.com/wp-content/uploads/2024/03/10-BBQ-Party-Ideas-for-Adults-That-Are-Easy-to-Plan-4-1536x864.jpg"
        alt="Family-sized homes"
        className="lg:max-w-[479px] max-w-[300px] h-[200px] lg:h-[400px] lg:object-cover left-[68.47%] self_promo_img_right absolute z-20"
      />
    </div>
  );
};

export default Collage;
