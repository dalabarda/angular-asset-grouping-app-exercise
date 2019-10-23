import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IEvent, IAsset, IGroups } from './assets.model'


@Injectable()
export class GroupService {

  getGroups() {
    return GROUPS
  }

  getGroup(id:number):IGroups {
      return GROUPS.find(group => group.id === id)
  }

  // to make new groups
  saveGroup(group: IGroups) {
    group.id = GROUPS.length + 1
    GROUPS.push(group)
  }

  // to update existing groups
  updateGroup(group: any) {
    // finding the existing groups in the array and replace it on the fly.
    let index = GROUPS.findIndex(x => x.id = group.id) 
    GROUPS[index] = group
  }
  
}


@Injectable()
export class AssetService {

  getAssets() {
    return ASSETS
  }

  getAsset(id:number):IAsset {
      return ASSETS.find(asset => asset.id === id)
  }

  // to save new events
  saveAsset(asset: IAsset) {
    asset.id = ASSETS.length + 1
    ASSETS.push(asset)
  }

  // to update existing events
  updateAsset(asset: any) {
    let index = ASSETS.findIndex(x => x.id = asset.id) // finding the existing event in the array and replace it for now
    ASSETS[index] = asset
      // so, now our create-session component emits a saveNewSession event, and we are binding to that in our event-details
      // when that event is emitted we call saveNewSession on our event-details component, which adds the session to the event and then updates it.
  }
  
}

const GROUPS:IGroups[] = [
        {
          id: 1,
          name: "Programing",
          date: new Date('9/26/2036'),
          description: `Computer programming (often shortened to programming) 
          is a process that leads from an original formulation of a computing 
          problem to executable computer programs. Programming involves activities 
          such as analysis, developing understanding, generating algorithms, 
          verification of requirements of algorithms including their correctness 
          and resources consumption, and implementation (commonly referred to as coding) 
          of algorithms in a target programming language.`
        },
        {
          id: 2,
          name: "Cats",
          date: new Date('9/26/2036'),
          description: `The domestic cat (Latin: Felis catus) is a small, typically furry, 
          carnivorous mammal. They are often called house cats when kept as indoor pets or simply 
          cats when there is no need to distinguish them from other felids and felines. Cats are 
          often valued by humans for companionship and for their ability to hunt vermin. There are 
          more than 70 cat breeds, though different associations proclaim different numbers according 
          to their standards.`
        },
        {
          id: 3,
          name: "Places",
          date: new Date('9/26/2036'),
          description: `travelling helps us broaden our horizon. Seeing how lives are carried out differently 
          compared to where we come from, meeting new people, seeing new sights, and learning new culture... 
          The change in environment often calls us to reflect on many aspects in life, and also learn to accept 
          differences, which I believe is important. `
        }
]

const ASSETS:IAsset[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: new Date('9/26/2036'),
      size: '82,4 KB',
      type: 'png',
      destination_url: '/app/assets/angularconnect-shield.png',
      modified: '2/15/2016',
      group_id: 1,
      description: ""
    },
    {
      id: 2,
      name: 'Angular Dilema',
      date: new Date('9/26/2036'),
      size: '300 KB',
      type: 'jpeg',
      destination_url: 'https://cdn-images-1.medium.com/max/400/1*z10-LVnW5p3RIcyduEleCA.jpeg',
      modified: '4/15/2016',
      group_id: 1,
      description: `We all know that our dev teams work hard, but with 
          the right management they can be even more productive, without 
          overworking them. In this session I'll show you how to get the 
          best results from the talent you already have on staff.`
    },
    {
      id: 3,
      name: 'Cute Cat 1',
      date: new Date('3/11/2017'),
      size: '400 KB',
      type: 'gif',
      destination_url: 'https://media.giphy.com/media/ob9Cfk1iUrBUQ/giphy.gif',
      modified: '3/11/2017',
      group_id: 2,
      description: ""
    },
      {
      id: 4,
      name: 'Angular 2 Cheat sheet',
      date: new Date('1/25/2017'),
      size: '500 KB',
      type: 'pdf',
      destination_url: 'http://files.meetup.com/8602262/Angular2_Cheat_Sheet.pdf',
      modified: '3/11/2017',
      group_id: 2,
      description: ""
    },
    {
      id: 5,
      name: 'Me doing this Angular exercise',
      date: new Date('3/11/2017'),
      size: '250 KB',
      type: 'gif',
      destination_url: 'https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif',
      modified: '3/11/2017',
      group_id: 2,
      description: ""
    },
    {
      id: 6,
      name: 'Cutest Cat',
      date: new Date('3/11/2017'),
      size: '200 KB',
      type: 'jpg',
      destination_url: 'https://s-media-cache-ak0.pinimg.com/736x/b9/e4/db/b9e4dbfe685af8a13adc805184ffb79d.jpg',
      modified: '3/13/2017',
      group_id: 3,
      description: "" 
    },
    {
      id: 7,
      name: 'Rio de Janeiro',
      date: new Date('3/11/2005'),
      size: '500 KB',
      type: 'jpg',
      destination_url: 'https://gezievreni.com/wp-content/uploads/2016/06/Rio-De-Janeiro-Gezi-Rehberi-800x500.jpg',
      modified: '3/11/2017',
      GPSposition: {
        x: -22.910355,
        y: -43.219688,
      },
      group_id: 3,
      description: ""
    },
    {
      id: 8,
      name: 'Berlin',
      date: new Date('3/11/2005'),
      size: '455 KB',
      type: 'jpg',
      destination_url: 'http://www.bahnbilder.de/bilder/schoener-blick-auf-berlin-kreuzbergdie-u1-142244.jpg',
      modified: '3/12/2017',
      GPSposition: {
        x: 13.400027,
        y: 52.509719,
      },
      group_id: 3,
      description: `Friedrichshain-Kreuzberg is the second borough of Berlin, formed in 2001 by 
      merging the former East Berlin borough of Friedrichshain and the former West Berlin borough 
      of Kreuzberg. The historic Oberbaum Bridge, formerly a Berlin border crossing for pedestrians, 
      links both districts across the river Spree as the new borough's landmark (as featured in 
      the coat of arms).`
    },
        {
      id: 9,
      name: 'New York City',
      date: new Date('3/11/2005'),
      size: '200 KB',
      type: 'png',
      destination_url: 'http://www.clipartbest.com/cliparts/dc7/o85/dc7o85nMi.png',
      modified: '3/11/2017',
      GPSposition: {
        x: -73.978652,
        y: 40.769042, 
      },
      group_id: 3, 
      description: `New York, is the most populous city in the United States. With an estimated 
      2015 population of 8,550,405 distributed over a land area of about 302.6 square miles 
      (784 km2), New York City is also the most densely populated major city in the United States. 
      Located at the southern tip of the state of New York, the city is the center of the New York 
      metropolitan area, one of the most populous urban agglomerations in the world. A global power 
      city, New York City exerts a significant impact upon commerce, finance, media, art, fashion, 
      research, technology, education, and entertainment, its fast pace defining the term New York 
      minute. Home to the headquarters of the United Nations, New York is an important center for 
      international diplomacy and has been described as the cultural and financial capital of the 
      world.`

    },
    {
      id: 10,
      name: 'Boring Bird',
      date: new Date('3/7/2017'),
      size: '1 MB',
      type: 'mp4',
      destination_url: '/assets/little_bird.mp4',
      modified: '3/11/2017',
      group_id: 3,
      description: ` This is the type of videos my mom sent to me on Whatsapp. Boring, right? =/ `
  }
]