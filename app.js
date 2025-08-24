// Shared data and helpers for the Serial Killer Books site

const SITE = {
  name: "Serial Killer Books",
};

const AUTHORS = [
  {
    id: "thomas-harris",
    name: "Thomas Harris",
    knownFor: "Hannibal Lecter series",
    books: [
      { 
        year: 1981, 
        title: "Red Dragon",
        cover: "https://upload.wikimedia.org/wikipedia/en/3/3a/Drag01big.jpg",
        description: "FBI profiler Will Graham tracks a serial killer known as the Tooth Fairy, with help from imprisoned cannibal Dr. Hannibal Lecter.",
        rating: 4.5
      },
      { 
        year: 1988, 
        title: "The Silence of the Lambs",
        cover: "https://img1.od-cdn.com/ImageType-400/2390-1/ED6/D90/D0/%7BED6D90D0-5FAD-4EC7-96E3-D4EAA50D76AC%7DImg400.jpg",
        description: "FBI trainee Clarice Starling interviews Dr. Hannibal Lecter to catch a serial killer known as Buffalo Bill.",
        rating: 4.7
      },
      { 
        year: 1999, 
        title: "Hannibal",
        cover: "https://archive.org/services/img/hannibal0000harr_d3y5/full/pct:200/0/default.jpg",
        description: "Dr. Hannibal Lecter resurfaces in Florence, Italy, while FBI agent Clarice Starling faces a conspiracy.",
        rating: 4.3
      },
      { 
        year: 2006, 
        title: "Hannibal Rising",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTSIZNBG-UMkB-cL870R4v_zBM7wrLxBHtQ&s",
        description: "The origin story of Hannibal Lecter, from his childhood in Lithuania to his transformation into a cannibalistic killer.",
        rating: 3.8
      },
    ],
  },
  {
    id: "patricia-cornwell",
    name: "Patricia Cornwell",
    knownFor: "Kay Scarpetta series",
    books: [
      { 
        year: 1990, 
        title: "Postmortem",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1341835831i/6534.jpg",
        description: "Dr. Kay Scarpetta investigates a series of strangulations in Richmond, Virginia, using forensic evidence to track a serial killer.",
        rating: 4.2
      },
      { 
        year: 1991, 
        title: "Body of Evidence",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Patricia_Cornwell_-_Body_of_Evidence.jpg/250px-Patricia_Cornwell_-_Body_of_Evidence.jpg",
        description: "Scarpetta investigates the murder of a novelist, uncovering a web of literary intrigue and forensic evidence.",
        rating: 4.0
      },
      { 
        year: 1992, 
        title: "All That Remains",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1341835948i/232123.jpg",
        description: "A serial killer targets young couples, leaving behind minimal evidence for Scarpetta to analyze.",
        rating: 4.1
      },
      { 
        year: 1993, 
        title: "Cruel and Unusual",
        cover: "https://m.media-amazon.com/images/I/714T-eNwa2L._UF1000,1000_QL80_.jpg",
        description: "Scarpetta faces political pressure while investigating the execution of a convicted killer and subsequent copycat murders.",
        rating: 4.3
      },
    ],
  },
  {
    id: "jeff-lindsay",
    name: "Jeff Lindsay",
    knownFor: "Dexter series",
    books: [
      { 
        year: 2004, 
        title: "Darkly Dreaming Dexter",
        cover: "https://m.media-amazon.com/images/I/71EkQpah7GL._UF1000,1000_QL80_.jpg",
        description: "Dexter Morgan, a blood spatter analyst for Miami Metro Police, leads a double life as a vigilante serial killer who targets other murderers.",
        rating: 4.4
      },
      { 
        year: 2005, 
        title: "Dearly Devoted Dexter",
        cover: "https://covers.openlibrary.org/b/id/242634-M.jpg",
        description: "Dexter investigates a killer who leaves his victims alive but mutilated, while dealing with his sister's suspicions.",
        rating: 4.2
      },
      { 
        year: 2007, 
        title: "Dexter in the Dark",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTBpOGqs1vNm6fptvwVg8vrjN7i5RMVMGOw&s",
        description: "Dexter's dark passenger disappears, leaving him questioning his nature while investigating a cult-related killing.",
        rating: 3.9
      },
      { 
        year: 2009, 
        title: "Dexter by Design",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqMfp1SJj8bFu4kTAZu744Gtk62MeswBOXw&s",
        description: "Dexter faces a killer who arranges victims in artistic poses, while his personal life becomes increasingly complicated.",
        rating: 4.0
      },
    ],
  },
  {
    id: "john-douglas",
    name: "John E. Douglas",
    knownFor: "Mindhunter, true-crime profiling",
    books: [
      { 
        year: 1995, 
        title: "Mindhunter",
        cover: "https://rukminim2.flixcart.com/image/850/1000/kmccosw0/book/c/d/p/mindhunter-original-imagf9r2ggjmqwyv.jpeg?q=90&crop=false",
        description: "The true story of the FBI's elite Serial Crime Unit and their groundbreaking work in criminal profiling.",
        rating: 4.6
      },
      { 
        year: 1998, 
        title: "Journey into Darkness",
        cover: "https://cdn.penguin.co.uk/dam-assets/books/9781787465145/9781787465145-jacket-large.jpg",
        description: "Follows the FBI's Behavioral Science Unit as they track down some of America's most dangerous killers.",
        rating: 4.4
      },
      { 
        year: 1999, 
        title: "Obsession",
        cover: "https://m.media-amazon.com/images/I/61AW2KMCXAL._UF1000,1000_QL80_.jpg",
        description: "Examines the psychology of stalking and obsession, drawing from real FBI case files.",
        rating: 4.2
      },
    ],
  },
  {
    id: "ann-rule",
    name: "Ann Rule",
    knownFor: "True crime, Ted Bundy case",
    books: [
      { 
        year: 1980, 
        title: "The Stranger Beside Me",
        cover: "https://m.media-amazon.com/images/I/818qC9hETHL._UF1000,1000_QL80_.jpg",
        description: "Ann Rule's personal account of working alongside Ted Bundy at a crisis hotline, unaware of his true nature.",
        rating: 4.5
      },
      { 
        year: 1988, 
        title: "Small Sacrifices",
        cover: "https://m.media-amazon.com/images/I/81dPk5971oL._UF1000,1000_QL80_.jpg",
        description: "The shocking true story of Diane Downs, who shot her three children, killing one and permanently injuring the others.",
        rating: 4.3
      },
      { 
        year: 1995, 
        title: "Dead by Sunset",
        cover: "https://bookoutlet.com/_next/image?url=https%3A%2F%2Fimages.bookoutlet.com%2Fcovers%2Flarge%2Fisbn978067%2F9780671001131-l.jpg&w=3840&q=75",
        description: "The investigation into the murder of Cheryl Keeton and the man who killed her for insurance money.",
        rating: 4.1
      },
    ],
  },
  {
    id: "chris-carter",
    name: "Chris Carter",
    knownFor: "Robert Hunter series",
    books: [
      { 
        year: 2009, 
        title: "The Crucifix Killer",
        cover: "https://m.media-amazon.com/images/I/81lqKyt2oAL.jpg",
        description: "Detective Robert Hunter investigates a series of brutal murders where victims are crucified and left in public places.",
        rating: 4.2
      },
      { 
        year: 2010, 
        title: "The Executioner",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328001396i/8544259.jpg",
        description: "Hunter tracks a killer who executes his victims in elaborate ways, leaving behind cryptic messages.",
        rating: 4.1
      },
      { 
        year: 2011, 
        title: "The Night Stalker",
        cover: "https://rukminim2.flixcart.com/image/704/844/k33c4nk0/book/9/8/7/the-night-stalker-original-imaf59cgmwufd6au.jpeg?q=90&crop=false",
        description: "A serial killer stalks victims at night, using the darkness to his advantage while Hunter races against time.",
        rating: 4.3
      },
      { 
        year: 2012, 
        title: "The Death Sculptor",
        cover: "https://m.media-amazon.com/images/I/81wofTcbhvL._UF1000,1000_QL80_.jpg",
        description: "Hunter investigates a killer who arranges victims' bodies in artistic poses, creating macabre sculptures.",
        rating: 4.0
      },
      { 
        year: 2013, 
        title: "One by One",
        cover: "https://m.media-amazon.com/images/I/81qcsn5AEEL._UF1000,1000_QL80_.jpg",
        description: "A killer targets victims one by one, leaving behind a trail of evidence that Hunter must decipher.",
        rating: 4.2
      },
      { 
        year: 2013, 
        title: "The Hunter",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1356512868i/17164253.jpg",
        description: "Hunter becomes the hunted as a killer turns the tables and begins stalking the detective himself.",
        rating: 4.1
      },
      { 
        year: 2014, 
        title: "An Evil Mind",
        cover: "https://m.media-amazon.com/images/I/71IzLEk6HSL._UF1000,1000_QL80_.jpg",
        description: "Hunter delves into the psychology of a brilliant but twisted killer who challenges his investigative skills.",
        rating: 4.4
      },
      { 
        year: 2015, 
        title: "I Am Death",
        cover: "https://m.media-amazon.com/images/I/91pkjTV-NXL._UF1000,1000_QL80_.jpg",
        description: "A killer who believes he is death itself begins a killing spree that Hunter must stop.",
        rating: 4.0
      },
      { 
        year: 2017, 
        title: "The Caller",
        cover: "https://img1.od-cdn.com/ImageType-400/0439-1/%7BAB8D35B0-FB84-49AA-B0B5-06A5C3FF08B0%7DIMG400.JPG",
        description: "Hunter receives mysterious calls from a killer who taunts him with details of his next murder.",
        rating: 4.1
      },
      { 
        year: 2018, 
        title: "Gallery of the Dead",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTuHvbIyJdJIPdeLoV0J1w1z_zAvv4tMclA&s",
        description: "A killer creates a gallery of death, displaying his victims in artistic arrangements.",
        rating: 4.2
      },
      { 
        year: 2019, 
        title: "Hunting Evil",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-WMv1C8qgLVyKQDkpEydAGufMJiR4wfS8g&s",
        description: "Hunter goes on the hunt for a particularly elusive killer who has evaded capture for years.",
        rating: 4.3
      },
      { 
        year: 2020, 
        title: "Written in Blood",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxw9mhP0aDqV9LQ7NH2ToNwIDDhIhSof0jA&s",
        description: "A killer leaves messages written in his victims' blood, creating a trail for Hunter to follow.",
        rating: 4.1
      },
      { 
        year: 2022, 
        title: "Genesis",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJyJBSLwEUT-5aQfqMXkuuZ2-Vz1WmySs8g&s",
        description: "Hunter investigates a case that seems to be the beginning of a new killing spree.",
        rating: 4.0
      },
      { 
        year: 2024, 
        title: "The Death Watcher",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1716927089i/198961595.jpg",
        description: "A killer who watches his victims die slowly, enjoying their suffering before finishing them off.",
        rating: 4.2
      },
    ],
  },
  {
    id: "mike-omer",
    name: "Mike Omer",
    knownFor: "Zoe Bentley, Abby Mullen, Glenmore Park",
    books: [
      // Glenmore Park Mysteries
      { heading: "Glenmore Park Mysteries" },
      { 
        year: 2016, 
        title: "Spider's Web",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1464270704i/30295179.jpg",
        description: "A small town is gripped by fear as a killer weaves a web of death around its residents.",
        rating: 4.0
      },
      { 
        year: 2016, 
        title: "Deadly Web",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1464598026i/30310540.jpg",
        description: "The web of death continues as more victims fall prey to the mysterious killer.",
        rating: 4.1
      },
      { 
        year: 2017, 
        title: "Web of Fear",
        cover: "https://d3bxjxywei423j.cloudfront.net/public/book_picture/size180x280_Web%20of%20Fear%20-%20Glenmore%20Park%20Mystery%2C%20Book%203.jpg",
        description: "Fear spreads through the town as the killer's web tightens around his next target.",
        rating: 4.2
      },
      // Zoe Bentley series
      { heading: "Zoe Bentley series" },
      { 
        year: 2018, 
        title: "A Killer's Mind",
        cover: "https://m.media-amazon.com/images/I/51IOyD6ldJL._SL500_.jpg",
        description: "FBI profiler Zoe Bentley uses her expertise to track down a serial killer with a unique psychological profile.",
        rating: 4.3
      },
      { 
        year: 2019, 
        title: "In the Darkness",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550790642i/40680738.jpg",
        description: "Bentley investigates a killer who operates in darkness, leaving his victims in pitch-black environments.",
        rating: 4.1
      },
      { 
        year: 2020, 
        title: "Thicker than Blood",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579053401i/45893584.jpg",
        description: "A case hits close to home when Bentley's own family becomes involved in the investigation.",
        rating: 4.2
      },
      // Abby Mullen thrillers
      { heading: "Abby Mullen thrillers" },
      { 
        year: 2021, 
        title: "A Deadly Influence",
        cover: "https://m.media-amazon.com/images/I/91A4t9066dL.jpg",
        description: "Abby Mullen investigates a killer who uses social media and influence to manipulate his victims.",
        rating: 4.0
      },
      { 
        year: 2022, 
        title: "Damaged Intentions",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627594979i/56982222.jpg",
        description: "Mullen tracks a killer whose intentions are as damaged as his victims.",
        rating: 4.1
      },
      { 
        year: 2023, 
        title: "A Burning Obsession",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654606118i/60312342.jpg",
        description: "An arsonist with a burning obsession becomes Mullen's latest case.",
        rating: 4.2
      }
    ],
  },
  {
    id: "karin-slaughter",
    name: "Karin Slaughter",
    knownFor: "Grant County & Will Trent",
    books: [
      { 
        year: 2001, 
        title: "Blindsighted",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1390283925i/21718.jpg",
        description: "Dr. Sara Linton investigates a brutal rape and murder in her small Georgia town.",
        rating: 4.4
      },
      { 
        year: 2002, 
        title: "Kisscut",
        cover: "https://s-media-cache-ak0.pinimg.com/236x/32/8d/57/328d575b71f2404724157a074e5021b6.jpg",
        description: "A teenage girl's suicide leads to the discovery of a child pornography ring.",
        rating: 4.2
      },
      { 
        year: 2006, 
        title: "Triptych",
        cover: "https://m.media-amazon.com/images/I/817zM5EFKbL._UF1000,1000_QL80_.jpg",
        description: "Will Trent investigates a series of murders that seem to be connected to his own past.",
        rating: 4.3
      },
      { 
        year: 2008, 
        title: "Fractured",
        cover: "https://m.media-amazon.com/images/I/41Bv1JrwD8L._AC_SX148_SY213_QL70_.jpg",
        description: "Trent investigates a case that fractures his understanding of justice and truth.",
        rating: 4.1
      },
      { 
        year: 2012, 
        title: "Criminal",
        cover: "https://m.media-amazon.com/images/I/71+kfrSZK+S._UF1000,1000_QL80_.jpg",
        description: "A case from the past comes back to haunt Trent and his colleagues.",
        rating: 4.2
      },
    ],
  },
  {
    id: "mo-hayder",
    name: "Mo Hayder",
    knownFor: "Jack Caffery series",
    books: [
      { 
        year: 2000, 
        title: "Birdman",
        cover: "https://m.media-amazon.com/images/I/81lfSqBDMfL._UF1000,1000_QL80_.jpg",
        description: "DI Jack Caffery investigates a series of murders where victims are found with bird parts.",
        rating: 4.3
      },
      { 
        year: 2001, 
        title: "The Treatment",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStW6cqSA_gproQWiT_nrbauZcs_DEt3rp0gtuE2kNhCazSAU6ZIEa2h_YAXLM2ylPTz1g&usqp=CAU",
        description: "Caffery investigates a killer who subjects his victims to horrific treatments.",
        rating: 4.1
      },
      { 
        year: 2008, 
        title: "Ritual",
        cover: "https://m.media-amazon.com/images/I/81UiEkoveRL._UF1000,1000_QL80_.jpg",
        description: "A ritualistic killer leaves behind clues that Caffery must decipher.",
        rating: 4.2
      },
      { 
        year: 2009, 
        title: "Skin",
        cover: "https://m.media-amazon.com/images/I/81jSmwqXp3L._UF1000,1000_QL80_.jpg",
        description: "A killer who takes skin from his victims becomes Caffery's latest case.",
        rating: 4.0
      },
      { 
        year: 2010, 
        title: "Gone",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0NwQG_6Yb9s07_kwHGVqP-EMDd1yTTPASA&s",
        description: "People are disappearing without a trace, and Caffery must find out why.",
        rating: 4.1
      },
    ],
  },
  {
    id: "val-mcdermid",
    name: "Val McDermid",
    knownFor: "Tony Hill & Carol Jordan",
    books: [
      { 
        year: 1995, 
        title: "The Mermaids Singing",
        cover: "https://m.media-amazon.com/images/I/81dbS1cJ3aL._UF1000,1000_QL80_.jpg",
        description: "Clinical psychologist Tony Hill helps DCI Carol Jordan investigate a series of brutal murders.",
        rating: 4.4
      },
      { 
        year: 1997, 
        title: "The Wire in the Blood",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694911200i/91481.jpg",
        description: "Hill and Jordan track a killer who leaves behind disturbing evidence.",
        rating: 4.2
      },
      { 
        year: 2002, 
        title: "The Last Temptation",
        cover: "https://m.media-amazon.com/images/I/911Z5H2aMcL._UF1000,1000_QL80_.jpg",
        description: "A killer uses temptation as a weapon, luring victims to their deaths.",
        rating: 4.1
      },
      { 
        year: 2004, 
        title: "The Torment of Others",
        cover: "https://bookmafiya.com/wp-content/uploads/2022/01/The-Torment-Of-Others-and-The-Mermaids-Singing-by-Val-McDermid.jpg",
        description: "Hill and Jordan investigate a case that torments both the victims and the investigators.",
        rating: 4.3
      },
    ],
  },
  {
    id: "jo-nesbo",
    name: "Jo Nesbø",
    knownFor: "Harry Hole series",
    books: [
      { 
        year: 2003, 
        title: "The Devil's Star",
        cover: "https://img1.od-cdn.com/ImageType-400/0211-1/%7BF3C5DBB3-EAFF-4D48-9B0F-2854FDA843EA%7DIMG400.JPG",
        description: "Detective Harry Hole investigates a series of murders in Oslo with a devilish pattern.",
        rating: 4.3
      },
      { 
        year: 2007, 
        title: "The Snowman",
        cover: "https://images-eu.ssl-images-amazon.com/images/I/81ke+h3bKOL._AC_UL900_SR615,900_.jpg",
        description: "Hole tracks a killer who leaves snowmen at the scenes of his murders.",
        rating: 4.5
      },
      { 
        year: 2009, 
        title: "The Leopard",
        cover: "https://m.media-amazon.com/images/I/51iJd8E+vtL._SY250_.jpg",
        description: "Hole investigates a killer who uses a unique murder weapon to kill his victims.",
        rating: 4.2
      },
    ],
  },
  {
    id: "chelsea-cain",
    name: "Chelsea Cain",
    knownFor: "Gretchen Lowell series",
    books: [
      { 
        year: 2007, 
        title: "Heartsick",
        cover: "https://m.media-amazon.com/images/I/71U5t3eOvWL._UF1000,1000_QL80_.jpg",
        description: "Detective Archie Sheridan is haunted by his past encounter with serial killer Gretchen Lowell.",
        rating: 4.1
      },
      { 
        year: 2008, 
        title: "Sweetheart",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUrd1zc0uF_imz9elOyVOfE2FkYBGDZ3jgkszSUaONR7M7Cd4XEYhItYNC142_7Q7X7M&usqp=CAU",
        description: "Lowell escapes from prison and begins a new killing spree, targeting Sheridan's loved ones.",
        rating: 4.2
      },
      { 
        year: 2009, 
        title: "Evil at Heart",
        cover: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781509816996.jpg",
        description: "Lowell's evil influence spreads as copycat killers emerge, inspired by her methods.",
        rating: 4.0
      },
    ],
  },
  {
    id: "mark-billingham",
    name: "Mark Billingham",
    knownFor: "Tom Thorne series",
    books: [
      { 
        year: 2001, 
        title: "Sleepyhead",
        cover: "https://m.media-amazon.com/images/I/81d+dh-6BjL._UF1000,1000_QL80_.jpg",
        description: "DI Tom Thorne investigates a killer who leaves his victims in a state between life and death.",
        rating: 4.2
      },
      { 
        year: 2002, 
        title: "Scaredy Cat",
        cover: "https://m.media-amazon.com/images/I/81nXovbUnJL._UF894,1000_QL80_.jpg",
        description: "Thorne tracks a killer who targets victims who are afraid of the dark.",
        rating: 4.1
      },
      { 
        year: 2004, 
        title: "The Burning Girl",
        cover: "https://m.media-amazon.com/images/I/81G7FDAjn9L.jpg",
        description: "A young girl's murder leads Thorne into a web of corruption and violence.",
        rating: 4.0
      },
    ],
  },
  {
    id: "robert-bryndza",
    name: "Robert Bryndza",
    knownFor: "Detective Erika Foster series",
    books: [
      { 
        year: 2016, 
        title: "The Girl in the Ice",
        cover: "https://m.media-amazon.com/images/I/A1d9UUMyo9L._UF1000,1000_QL80_.jpg",
        description: "DI Erika Foster investigates the murder of a young woman found frozen in ice.",
        rating: 4.1
      },
      { 
        year: 2016, 
        title: "The Night Stalker",
        cover: "https://m.media-amazon.com/images/I/91I7zq2Y8wL.jpg",
        description: "Foster tracks a killer who strikes at night, leaving behind minimal evidence.",
        rating: 4.2
      },
      { 
        year: 2016, 
        title: "Dark Water",
        cover: "https://pictures.abebooks.com/isbn/9780751571301-uk.jpg",
        description: "A body found in water leads Foster into a case with dark secrets.",
        rating: 4.0
      },
    ],
  },
  {
    id: "jonathan-kellerman",
    name: "Jonathan Kellerman",
    knownFor: "Alex Delaware series",
    books: [
      { 
        year: 1985, 
        title: "When the Bough Breaks",
        cover: "https://m.media-amazon.com/images/I/81Quu91Lq-L._UF350,350_QL50_.jpg",
        description: "Child psychologist Alex Delaware helps investigate a case involving child abuse and murder.",
        rating: 4.3
      },
      { 
        year: 1986, 
        title: "Blood Test",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1341254576i/172912.jpg",
        description: "Delaware investigates a case where blood evidence reveals disturbing secrets.",
        rating: 4.1
      },
      { 
        year: 1987, 
        title: "Over the Edge",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TnQjnXUfH3ycBwAy9un16WMHk_9i7qtm_oviNy0DckNbrLYHIcPA204vFXul4WttM0Y&usqp=CAU",
        description: "Delaware helps solve a case that pushes the boundaries of psychological profiling.",
        rating: 4.2
      },
    ],
  },
  {
    id: "michael-connelly",
    name: "Michael Connelly",
    knownFor: "Serial-killer thrillers",
    books: [
      { 
        year: 1996, 
        title: "The Poet",
        cover: "https://m.media-amazon.com/images/I/91pr+nZUMbL._UF1000,1000_QL80_.jpg",
        description: "Journalist Jack McEvoy investigates a series of murders where victims are found with suicide notes.",
        rating: 4.4
      },
      { 
        year: 2009, 
        title: "The Scarecrow",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrw1a5VoWb92taAbTC-hsL5gXbr1ussJiO-PFaIcK94pWQ2xC9VKPYFwyT_zLXamrzDuM&usqp=CAU",
        description: "McEvoy returns to investigate a killer who uses technology to stalk and kill his victims.",
        rating: 4.2
      },
    ],
  },
  {
    id: "mw-craven",
    name: "M.W. Craven",
    knownFor: "Washington Poe series",
    books: [
      { 
        year: 2019, 
        title: "The Puppet Show",
        cover: "https://m.media-amazon.com/images/I/81cp6mwuPSL._UF1000,1000_QL80_.jpg",
        description: "DI Washington Poe investigates a killer who arranges his victims like puppets.",
        rating: 4.3
      },
      { 
        year: 2019, 
        title: "Black Summer",
        cover: "https://m.media-amazon.com/images/I/71F2z7GeOPL._UF1000,1000_QL80_.jpg",
        description: "Poe investigates a case that takes place during a particularly dark summer.",
        rating: 4.1
      },
      { 
        year: 2020, 
        title: "The Curator",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587214202i/53053120.jpg",
        description: "A killer who curates his murders like art pieces becomes Poe's latest challenge.",
        rating: 4.2
      },
    ],
  },
  {
    id: "caroline-kepnes",
    name: "Caroline Kepnes",
    knownFor: "You series",
    books: [
      { 
        year: 2014, 
        title: "You",
        cover: "https://m.media-amazon.com/images/I/71VRtee2tqL._UF1000,1000_QL80_.jpg",
        description: "Joe Goldberg becomes obsessed with a woman and will do anything to make her love him.",
        rating: 4.1
      },
      { 
        year: 2016, 
        title: "Hidden Bodies",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFh1vIiB75VIKphUWswiJX8TI0PzV4ZKeXUA&s",
        description: "Joe moves to Los Angeles and finds new obsessions while trying to hide his past.",
        rating: 4.0
      },
      { 
        year: 2021, 
        title: "You Love Me",
        cover: "https://m.media-amazon.com/images/I/716-dl-TXEL._UF1000,1000_QL80_.jpg",
        description: "Joe tries to start fresh in a new town but his dark nature won't let him escape his past.",
        rating: 4.1
      },
    ],
  },
  {
    id: "harold-schechter",
    name: "Harold Schechter",
    knownFor: "True crime serial killers",
    books: [
      { 
        year: 1989, 
        title: "Deviant",
        cover: "https://m.media-amazon.com/images/I/814ZEZGnZNL._UF1000,1000_QL80_.jpg",
        description: "The true story of Ed Gein, the Wisconsin killer who inspired numerous horror films.",
        rating: 4.2
      },
      { 
        year: 1990, 
        title: "Deranged",
        cover: "https://m.media-amazon.com/images/I/61S-UUjHU2L._UF1000,1000_QL80_.jpg",
        description: "The shocking true story of Albert Fish, one of America's most depraved killers.",
        rating: 4.0
      },
      { 
        year: 1995, 
        title: "Fiend",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3czyIERPoMOlYwRPd4ZqCU04YiRHBMCLHA&s",
        description: "The true story of Jesse Pomeroy, the boy serial killer of 1870s Boston.",
        rating: 4.1
      },
    ],
  },
  {
    id: "robert-graysmith",
    name: "Robert Graysmith",
    knownFor: "Zodiac case",
    books: [
      { 
        year: 1986, 
        title: "Zodiac",
        cover: "https://m.media-amazon.com/images/I/81L3eM39jOL._UF1000,1000_QL80_.jpg",
        description: "The definitive account of the Zodiac Killer who terrorized San Francisco in the 1960s and 70s.",
        rating: 4.4
      },
      { 
        year: 2002, 
        title: "Zodiac Unmasked",
        cover: "https://m.media-amazon.com/images/I/4189zv5rhHL._AC_SY200_QL15_.jpg",
        description: "Graysmith's investigation into the identity of the Zodiac Killer continues.",
        rating: 4.2
      },
    ],
  },
  {
    id: "michelle-mcnamara",
    name: "Michelle McNamara",
    knownFor: "Golden State Killer investigation",
    books: [
      { 
        year: 2018, 
        title: "I'll Be Gone in the Dark",
        cover: "https://m.media-amazon.com/images/I/9131jOth4gL._UF1000,1000_QL80_.jpg",
        description: "McNamara's obsessive search for the Golden State Killer, a case that consumed her life.",
        rating: 4.5
      },
    ],
  },
];

const SERIAL_KILLERS = [
  {
    id: "ted-bundy",
    name: "Ted Bundy",
    photo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Ted_Bundy_headshot.jpg",
    crimes: "Murdered at least 30 young women across multiple states",
    mo: "Posed as injured or in need of help, lured victims to his car, then kidnapped and murdered them",
    captured: "1975 - Arrested for kidnapping, escaped twice, finally captured in 1978",
    years: "1974-1978",
    victims: "30+ confirmed"
  },
  {
    id: "jeffrey-dahmer",
    name: "Jeffrey Dahmer",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg/250px-Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg",
    crimes: "Murdered 17 men and boys, engaged in necrophilia and cannibalism",
    mo: "Lured victims to his apartment, drugged them, strangled them, then dismembered and preserved body parts",
    captured: "1991 - Arrested after a victim escaped and alerted police",
    years: "1978-1991",
    victims: "17 confirmed"
  },
  {
    id: "john-wayne-gacy",
    name: "John Wayne Gacy",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/John_Wayne_Gacy_1978_mugshot.jpg/1200px-John_Wayne_Gacy_1978_mugshot.jpg",
    crimes: "Murdered at least 33 young men and boys",
    mo: "Posed as a police officer or contractor, lured victims to his home, tortured and murdered them",
    captured: "1978 - Arrested after police discovered bodies buried in his crawlspace",
    years: "1972-1978",
    victims: "33 confirmed"
  },
  {
    id: "dennis-rader",
    name: "Dennis Rader (BTK)",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Dennis_Lynn_Rader.jpg/250px-Dennis_Lynn_Rader.jpg",
    crimes: "Murdered 10 people in Wichita, Kansas",
    mo: "Bound, tortured, and killed victims in their homes, often leaving taunting messages",
    captured: "2005 - Arrested after sending a floppy disk that contained metadata linking to his church",
    years: "1974-1991",
    victims: "10 confirmed"
  },
  {
    id: "gary-ridgway",
    name: "Gary Ridgway (Green River Killer)",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gary_Ridgway_Mugshot_11302001.jpg/250px-Gary_Ridgway_Mugshot_11302001.jpg",
    crimes: "Murdered at least 49 women, mostly prostitutes",
    mo: "Picked up sex workers, strangled them, and dumped bodies in wooded areas",
    captured: "2001 - Arrested after DNA evidence linked him to the crimes",
    years: "1982-1998",
    victims: "49+ confirmed"
  },
  {
    id: "edmund-kemper",
    name: "Edmund Kemper",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kempermugshot.jpg/250px-Kempermugshot.jpg",
    crimes: "Murdered 10 people including his grandparents and mother",
    mo: "Killed hitchhikers and family members, engaged in necrophilia and dismemberment",
    captured: "1973 - Turned himself in to police after killing his mother",
    years: "1964-1973",
    victims: "10 confirmed"
  }
];

function getAuthorsSorted() {
  return AUTHORS.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function getAuthorById(id) {
  return AUTHORS.find((a) => a.id === id);
}

function byYear(a, b) {
  return a.year - b.year;
}

function mountHeader(active) {
  const header = document.querySelector("header.site-header .brand-title");
  if (header) header.textContent = SITE.name;
  
  // Remove active class from all nav links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => link.classList.remove("active"));
  
  // Add active class to the appropriate link
  if (active === "authors") {
    const navAuthors = document.querySelector('nav a[href="authors.html"]');
    if (navAuthors) navAuthors.classList.add("active");
  } else if (active === "serial-killers") {
    const navSerialKillers = document.querySelector('nav a[href="serial-killers.html"]');
    if (navSerialKillers) navSerialKillers.classList.add("active");
  } else if (active === "home") {
    const navHome = document.querySelector('nav a[href="index.html"]');
    if (navHome) navHome.classList.add("active");
  }
}

function renderAuthorsList(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const list = document.createElement("ul");
  list.className = "clean";
  for (const a of getAuthorsSorted()) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `author.html?id=${encodeURIComponent(a.id)}`;
    link.textContent = a.name;
    const small = document.createElement("div");
    small.style.color = "var(--muted)";
    small.style.marginTop = "4px";
    small.textContent = a.knownFor;
    li.appendChild(link);
    li.appendChild(small);
    list.appendChild(li);
  }
  container.appendChild(list);
}

function renderAuthorDetail(containerSelector) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const author = getAuthorById(id || "");
  const container = document.querySelector(containerSelector);
  if (!container) return;
  if (!author) {
    container.innerHTML = `<div class="card"><h2>Author not found</h2><p class="muted">The requested author could not be located.</p><p><a class="btn" href="authors.html">Back to authors</a></p></div>`;
    return;
  }
  const header = document.createElement("div");
  header.className = "card";
  header.innerHTML = `<h2>${author.name}</h2><p class="muted">${author.knownFor}</p>`;

  const booksCard = document.createElement("div");
  booksCard.className = "card";
  const books = author.books.slice(); // Do not sort, preserve heading order
  let bookIndex = 0;
  const items = books.map((b, i) => {
    if (b.heading) {
      return `<li class="book-heading" style="color: white; font-weight: bold; font-size: 1.1em; margin-top: 1em;">${b.heading}</li>`;
    }
    const ratingStars = b.rating ? '★'.repeat(Math.floor(b.rating)) + '☆'.repeat(5 - Math.floor(b.rating)) : '';
    const coverImg = b.cover ? `<img src="${b.cover}" alt="${b.title} cover" class="book-cover" />` : '';
    const description = b.description ? `<p class="book-description">${b.description}</p>` : '';
    const rating = b.rating ? `<div class="book-rating">${ratingStars} (${b.rating})</div>` : '';
    bookIndex++;
    return `<li class="book-item">
      <div class="book-content">
        ${coverImg}
        <div class="book-details">
          <strong>${bookIndex}. ${b.title}</strong> <span class="muted">(${b.year})</span>
          ${description}
          ${rating}
        </div>
      </div>
    </li>`;
  }).join("");
  booksCard.innerHTML = `<h3>Books (in order)</h3><ul class="clean">${items}</ul>`;

  container.appendChild(header);
  container.appendChild(booksCard);
}

function renderSerialKillers(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const killersGrid = document.createElement("div");
  killersGrid.className = "killers-grid";
  
  SERIAL_KILLERS.forEach(killer => {
    const killerCard = document.createElement("div");
    killerCard.className = "killer-card";
    killerCard.innerHTML = `
      <div class="killer-photo" style="display: flex; justify-content: center; align-items: center; height: 260px; background: #222;">
        <img src="${killer.photo}" alt="${killer.name}" style="max-width: 100%; max-height: 250px; object-fit: contain; object-position: center; border-radius: 8px; background: #111;" />
      </div>
      <div class="killer-info">
        <h3>${killer.name}</h3>
        <div class="killer-stats">
          <span class="stat-badge">${killer.years}</span>
          <span class="stat-badge victims">${killer.victims}</span>
        </div>
        <div class="killer-details">
          <div class="detail-section">
            <h4>Crimes</h4>
            <p>${killer.crimes}</p>
          </div>
          <div class="detail-section">
            <h4>Method of Operation (MO)</h4>
            <p>${killer.mo}</p>
          </div>
          <div class="detail-section">
            <h4>Capture</h4>
            <p>${killer.captured}</p>
          </div>
        </div>
      </div>
    `;
    killersGrid.appendChild(killerCard);
  });
  
  container.appendChild(killersGrid);
}

// Expose helpers for inline scripts on each page
window.SerialSite = {
  mountHeader,
  renderAuthorsList,
  renderAuthorDetail,
  renderSerialKillers,
};


