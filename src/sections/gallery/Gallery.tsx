import { photos } from "../../data/photos";
import "./Gallery.scss";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Captions, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useTranslation } from "react-i18next";
import { BRAND_NAME } from "../../data/siteData";
import type { PhotoType, TranslatedPhotos } from "../../types/data";
import type { SectionProps } from "../../types/props";
import Button from "../../components/button/Button";

function Gallery({ sectionRef }: SectionProps) {
  const [index, setIndex] = useState<number>(-1);
  const [showAll, setShowAll] = useState<boolean>(false);
  const { t } = useTranslation();

  const visiblePhotos: PhotoType[] = showAll ? photos : photos.slice(0, 6);

  const translatedPhotos: TranslatedPhotos[] = photos.map((photo: PhotoType) => ({
    ...photo,
    title: BRAND_NAME,
    description: t(photo.descriptionKey),
  }));

  return (
    <section ref={sectionRef} className="gallery-section">
      <div>
        <h1 className="section-heading">{t("gallery.sectionHeading")}</h1>
      </div>
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
            onClick={() => setShowAll(true)}
            text={t("gallery.viewMoreButton")}
          />
        )}

        {showAll && (
          <Button
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
