---
title: Fake title 1
date: 2024-02-12
image: 
  src: ../../assets/image.jpg
  alt: Katie Haus
---
import { Image } from 'astro:assets';
import Katie from "../assets/image.jpg";

hi from *Markdown*

![Katie Haus](../../assets/image.jpg)
<Image src={Katie} alt="Katie Haus" width={500} />

![Katie Haus](/image.jpg)
<Image src="/image.jpg" alt="Katie Haus" width={500} height={500} />

![graphic for web stuff](https://astro.build/_astro/content-focused.VdVRy80q.webp)
<Image src="https://astro.build/_astro/content-focused.VdVRy80q.webp" alt="Katie Haus" width={500} height={200} />