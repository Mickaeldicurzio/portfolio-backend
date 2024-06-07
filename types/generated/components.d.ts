import type { Schema, Attribute } from '@strapi/strapi';

export interface DateTravel extends Schema.Component {
  collectionName: 'components_date_travels';
  info: {
    displayName: 'travel';
  };
  attributes: {};
}

export interface DateWorkingDate extends Schema.Component {
  collectionName: 'components_date_working_dates';
  info: {
    displayName: 'working date';
    description: '';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    contractType: Attribute.Enumeration<
      ['CDI', 'CDD', 'Alternance', 'FreeLance']
    >;
    description: Attribute.RichText;
    post: Attribute.String;
  };
}

export interface DistinctionsDistonctions extends Schema.Component {
  collectionName: 'components_distinctions_distonctions';
  info: {
    displayName: 'distonctions';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    description: Attribute.String;
  };
}

export interface HeroHeroParalax extends Schema.Component {
  collectionName: 'components_hero_hero_paralaxes';
  info: {
    displayName: 'heroParalax';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.RichText;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {};
}

export interface TravelTravel extends Schema.Component {
  collectionName: 'components_travel_travels';
  info: {
    displayName: 'travel';
    description: '';
  };
  attributes: {
    Place: Attribute.String;
    dateStart: Attribute.Date;
    galery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    dateEnd: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'date.travel': DateTravel;
      'date.working-date': DateWorkingDate;
      'distinctions.distonctions': DistinctionsDistonctions;
      'hero.hero-paralax': HeroHeroParalax;
      'hero.hero': HeroHero;
      'travel.travel': TravelTravel;
    }
  }
}
