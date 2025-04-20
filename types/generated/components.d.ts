import type { Schema, Struct } from '@strapi/strapi';

export interface DateTravel extends Struct.ComponentSchema {
  collectionName: 'components_date_travels';
  info: {
    displayName: 'travel';
  };
  attributes: {};
}

export interface DateWorkingDate extends Struct.ComponentSchema {
  collectionName: 'components_date_working_dates';
  info: {
    description: '';
    displayName: 'working date';
  };
  attributes: {
    contractType: Schema.Attribute.Enumeration<
      ['CDI', 'CDD', 'Alternance', 'FreeLance']
    >;
    description: Schema.Attribute.RichText;
    endDate: Schema.Attribute.Date;
    post: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
  };
}

export interface DistinctionsDistonctions extends Struct.ComponentSchema {
  collectionName: 'components_distinctions_distonctions';
  info: {
    description: '';
    displayName: 'distonctions';
  };
  attributes: {
    description: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {};
}

export interface HeroHeroParalax extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_paralaxes';
  info: {
    displayName: 'heroParalax';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface TravelTravel extends Struct.ComponentSchema {
  collectionName: 'components_travel_travels';
  info: {
    description: '';
    displayName: 'travel';
  };
  attributes: {
    dateEnd: Schema.Attribute.Date;
    dateStart: Schema.Attribute.Date;
    galery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Place: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'date.travel': DateTravel;
      'date.working-date': DateWorkingDate;
      'distinctions.distonctions': DistinctionsDistonctions;
      'hero.hero': HeroHero;
      'hero.hero-paralax': HeroHeroParalax;
      'travel.travel': TravelTravel;
    }
  }
}
