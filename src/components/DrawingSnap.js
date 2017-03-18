import React from 'react';
import { Segment, Label  } from 'semantic-ui-react'
import { Image, Video, CloudinaryContext } from 'cloudinary-react'
import { cloudinaryConfig } from '../database/database'

const placeHolder = "Drawings/DCI-100-A"
const publicID = "Drawings/DCI-100-AB"
const cloudName = cloudinaryConfig.cloud_name

const DrawingSnap = () => (
  <Segment compact color="olive" vertical>
    <Label attached="top">Discipline Interface Charts</Label>
    <CloudinaryContext cloudName={cloudName}>
      <Video id="drawing-video" className="mobile tablet hidden" publicId={publicID} poster={{ publicId: placeHolder }}
        width="700" height="500" crop="scale" controls autoPlay loop />
    </CloudinaryContext>
    <Image id="drawing-image" className="mobile tablet only" cloudName={cloudName} publicId={placeHolder} crop="scale" />
  </Segment>
);

export default DrawingSnap;