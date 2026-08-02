import { photos } from "../data/photos";
import "../assets/styles/Gallery.scss";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Captions, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import { BRAND_NAME } from "../data/siteData";

function Gallery({ sectionRef }: SectionProps) {
  const [index, setIndex] = useState<number>(-1);
  const [showAll, setShowAll] = useState<boolean>(false);
  const { t } = useTranslation();

  const visiblePhotos: PhotoType[] = showAll ? photos : photos.slice(0, 12);

  const translatedPhotos: TranslatedPhotos[] = photos.map((photo: PhotoType) => ({
    ...photo,
    title: BRAND_NAME,
    description: t(photo.descriptionKey),
  }));

  return (
    <section ref={sectionRef} className="gallery-section">
      <h1 className="section-heading">{t("gallery.sectionHeading")}</h1>
      <div className="gallery-thumbnails">
        {visiblePhotos.map((photo: PhotoType, i: number) => (
          <img
            alt=""
            src={photo.thumbnail}
            onClick={() => {
              setIndex(i);
            }}
            className="image"
            key={photo.src}
          />
        ))}
      </div>

      <div className="gallery-button-wrapper">
        {!showAll && (
          <Button
            className="gallery-button"
            onClick={() => setShowAll(true)}
            text={t("gallery.viewMoreButton")}
          />
        )}

        {showAll && (
          <Button
            className="gallery-button"
            onClick={() => setShowAll(false)}
            text={t("gallery.viewLessButton")}
          />
        )}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={translatedPhotos}
        plugins={[Thumbnails, Zoom, Captions, Fullscreen]}
      />
    </section>
  );
}

export default Gallery;
