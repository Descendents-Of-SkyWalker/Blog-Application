create database Vibranium;

use Vibranium;

-- creating user table
create table Users(
    name varchar(40),
    age int(5),
    gender varchar(10),
    bio varchar(500),
    username varchar(50),
    mail_id varchar(40) primary key,
    password varchar(255),
    state varchar(50),
    city varchar(50),
    pinCode int(6),
    address varchar(255),
    interests varchar(500)
);

create table quotes(
    name varchar(255),
    content varchar(3000)
);

create table blogs(
    name varchar(255),
    title varchar(255),
    content varchar(5000)
);

insert into quotes (name,content) values('Yoda','Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.');

insert into quotes (name,content) values('Nelson Mandela','The greatest glory in living lies not in never falling, but in rising every time we fall.');

insert into quotes (name,content) values('Walt Disney','The way to get started is to quit talking and begin doing.');

insert into quotes (name,content) values('Obi-Wan Kenobi','The Force will be with you. Always.');

insert into quotes (name,content) values('Anakin Skywalker','Someday I will be the most powerful Jedi ever.');

insert into quotes (name,content) values('Eleanor Roosevelt','If life were predictable it would cease to be life, and be without flavor.');

insert into quotes (name,content) values('James Cameron',"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.");

insert into quotes (name,content) values('John Lennon',"Life is what happens when you're busy making other plans.");

insert into quotes (name,content) values('Mother Teresa','Spread love everywhere you go. Let no one ever come to you without leaving happier.');

insert into quotes (name,content) values('Anne Frank','Whoever is happy will make others happy too.');

insert into quotes (name,content) values('Darth Vader','No. I am your father.');

insert into quotes (name,content) values('Helen Keller','The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.');


insert into blogs (name,title,content) values('James Clear','Why Facts Don’t Change Our Minds','The economist J.K. Galbraith once wrote, “Faced with a choice between changing one’s mind and proving there is no need to do so, almost everyone gets busy with the proof.”
Leo Tolstoy was even bolder: “The most difficult subjects can be explained to the most slow-witted man if he has not formed any idea of them already; but the simplest thing cannot be made clear to the most intelligent man if he is firmly persuaded that he knows already, without a shadow of doubt, what is laid before him.”
What is going on here? Why do not facts change our minds? And why would someone continue to believe a false or inaccurate idea anyway? How do such behaviors serve us?
The Logic of False Beliefs
Humans need a reasonably accurate view of the world in order to survive. If your model of reality is wildly different from the actual world, then you struggle to take effective actions each day.
However, truth and accuracy are not the only things that matter to the human mind. Humans also seem to have a deep desire to belong.
In Atomic Habits, I wrote, “Humans are herd animals. We want to fit in, to bond with others, and to earn the respect and approval of our peers. Such inclinations are essential to our survival. For most of our evolutionary history, our ancestors lived in tribes. Becoming separated from the tribe—or worse, being cast out—was a death sentence.”
Understanding the truth of a situation is important, but so is remaining part of a tribe. While these two desires often work well together, they occasionally come into conflict.');

insert into blogs (name,title,content) values('Mark Carrigan','Modern Heroism','In 1986, DC Comics published a four issue mini-series called Batman: The Dark Knight Returns. While few would have predicted it prior to its publication, this work of Frank Miller was soon regarded as one of the touchstones for the medium and, through commercial success and critical controversy, almost single-handedly reinvigorated a moribund character. Time magazine suggested the portrayal of a “semiretired Batman [who] drinks too much and is unsure about his crime-fighting abilities” was an example of trying to appeal to “today’s sceptical readers”.
Regardless of the criticism which the series received in some quarters, it undoubtedly did appeal to readers and the manner in which its “dark” and “adult” approach were progressively taken up by other comics points to the “scepticism” of those readers being a widespread condition rather than the aberrant property of a cynical minority. The same dark approach lay behind the critical and commercial success which Christopher Nolan’s The Dark Knight enjoyed at the box office in the summer of 2008. Why is this kind of approach so popular? What explains its manifest resonance amongst vast swathes of the cinema-going and comic-buying public?
Perhaps the answers lies towards the end of the film when Batman and Jim Gordon attempt to make sense of Harvey Dent’s actions, as the brave and virtuous district attorney was driven to attempted murder by the cruel machinations of the joker. The public regards Bent as a hero, but the public face of heroism becomes a fiction, crafted by powerful men in midnight schemes, because the masses could not countenance that the grim truth and social order necessitates the illusion. The heroism of Harvey Bent becomes a cruel joke, which Batman, alter ego of the billionaire Bruce Wayne, attempts to hide in the best interests of the public. If it was not for his own personal biography, as a man forever damaged by the murder of his parents as a child, he might have channelled this patrician impulse into philanthropy. As it is stands, he rushes off into the night, chased by police and dogs, taking the blame for the crimes that Bent committed. His parting words sum up the ethos of the exchange: “You either die a hero or live long enough to see yourself become the villain”. This is the bitter truth which the public must be protected from at all costs. The closest thing to heroism which The Dark Knight portrays is the attempted deception of the public towards this end.');

insert into blogs (name,title,content) values('James Clear','The Ultimate Productivity Hack is Saying No','The ultimate productivity hack is saying no.
Not doing something will always be faster than doing it. This statement reminds me of the old computer programming saying, “Remember that there is no code faster than no code.”
The same philosophy applies in other areas of life. For example, there is no meeting that goes faster than not having a meeting at all.
This is not to say you should never attend another meeting, but the truth is that we say yes to many things we do not actually want to do. There are many meetings held that do not need to be held. There is a lot of code written that could be deleted.
How often do people ask you to do something and you just reply, “Sure thing.” Three days later, you are overwhelmed by how much is on your to-do list. We become frustrated by our obligations even though we were the ones who said yes to them in the first place.
It is worth asking if things are necessary. Many of them are not, and a simple “no” will be more productive than whatever work the most efficient person can muster.
But if the benefits of saying no are so obvious, then why do we say yes so often?
Why We Say Yes
We agree to many requests not because we want to do them, but because we do not want to be seen as rude, arrogant, or unhelpful. Often, you have to consider saying no to someone you will interact with again in the future—your co-worker, your spouse, your family and friends.');

insert into blogs (name,title,content) values('Kate Hoyland','Rethinking Asia','What is it like to be taken over by a Chinese firm? Executives, speaking to The Economist tell of hungry decisiveness, followed by strange opacity: who is in charge, what really do they want? When Aung San Suu Kyi, Burma’s dignified opposition leader, was released from house arrest after 15 odd years, on and off, she spoke of using a mobile phone for the very first time (‘It felt very inadequate to me;, she said: ‘It was so small’). Her ignorance of one of the basic tools of modern life gave a small insight into her long and unjust imprisonment.
Therein two views of Asia. The anxious: ‘They are predatory—what do they want’? And the superior: ‘They do what we would not’ (never mind cases of unjust imprisonment closer to home). As any tourist will tell you, who has signed up to wander the foothills of the Himalayas, or trek through villages in Northern Thailand to see ‘how they really live’, Asia (or ‘The East’) exemplifies the unknown, a place where—by rubbing up against the curious and the unfamiliar—we might discover something about ourselves.
Like latter day Marco Polos, we are in love with difference. ‘Let me tell you’, he fizzes, ‘the truly amazing facts about the greatest lord of the Lords of all the Tartars, the right noble Great Khan whose name is Kubilai….’ Chasing the exotic, we are secure in the belief that it can always be found elsewhere (we are our own reference point—there is nothing exotic about known and knowable us). At the root of the security, is an unthinking arrogance. We are the ones to do the discovering: our vantage point is privileged because history has made it so. Unequal wealth, colonialism, and all its crimes have conferred a sense that it is we who explore, we who conquer and own.');

insert into blogs (name,title,content) values('James Clear','How Innovative Ideas Arise','In 2010, Thomas Thwaites decided he wanted to build a toaster from scratch. He walked into a shop, purchased the cheapest toaster he could find, and promptly went home and broke it down piece by piece.
Thwaites had assumed the toaster would be a relatively simple machine. By the time he was finished deconstructing it, however, there were more than 400 components laid out on his floor. The toaster contained over 100 different materials with three of the primary ones being plastic, nickel, and steel.
He decided to create the steel components first. After discovering that iron ore was required to make steel, Thwaites called up an iron mine in his region and asked if they would let him use some for the project.
Surprisingly, they agreed.
The Toaster Project
The victory was short-lived.
When it came time to create the plastic case for his toaster, Thwaites realized he would need crude oil to make the plastic. This time, he called up BP and asked if they would fly him out to an oil rig and lend him some oil for the project. They immediately refused. It seems oil companies are not nearly as generous as iron mines.');

insert into blogs (name,title,content) values('Nicholas Klacsanzky','Eternal Existence','Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing, such as a vacuum (the state of minimum possible energy) (Phys.org). Creating a space where there are no quantum fluctuations requires an enormous amount of energy, and there would be a remnant of that energy in that space afterwards if the fluctuations were flushed out, plus an unstable environment (1veritasium). Even on computers, deleted data is not actually tossed away, by rather written over. The fact that there can never be nothingness means the universe, and anything possibly beyond it, is eternal, as something has always been around. Whatever we consider to be before the Big Bang—God, the universe in infinitesimal form, or both—one thing is certain: it was there.
Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else. However, when it comes to existence itself, it takes on the opposite. It’s mind boggling to think that something has always been and always will be. It goes contrary to what we experience in our lives. But somehow, it’s possible. It also implies that cause is a misnomer: if existence is eternal, then cause is not all that important. Existence, without a beginning or end, continues to change its form. In addition, the concept of time has to be thrown out as well if we consider the nature of the universe. Without a beginning or end to existence, time is rendered irrelevant. Sure, it is a useful tool in our daily lives, but it is not a universal fact. Time is just our perception of duration within an eternal universe.');

insert into blogs (name,title,content) values('Sabreen Maryam Ali','A Thankless Nation','To read the morning newspaper in Britain today is to trudge through reams of dissent and disapproval with a worldly air of cynicism and self-importance. It is almost as if we rebel against the notion that things may be running smoothly. No—we must mark our target, cock our razor sharp tongues, and take aim. Our voices ring with pilfered authority, echoing judgmental and mistrustful opinions that may not have a basis. Any motion to improve a situation is always met with harsh criticism from the masses, and voices to the contrary are drowned out. Nothing can be accomplished correctly.
Ungratefulness in society is perhaps human nature. Schopenhauerʼs pessimistic ideology, ‘the world is essentially bad and ought not to be’, has its traces in society, but these are obscured by short-lived appreciativeness for what we have. Should everything in our lives give us cause for complaint? We are languishing in the epitome of a lose-lose situation—there will always exist opposition to any idea. Larger moves for change may be justified in eliciting this reaction, since change is unpredictable and frequently risky. As the recipients of change and those who will bear its consequences, we are vindicated in brandishing our own (or borrowed) opinions.');

insert into blogs (name,title,content) values('Michael Atkinson','Hemingway and His Biographers','Authors’ biographies have traditionally delivered varying ratios of worship and destruction—the first quantity an organic by-product of book-love, the second an equally natural result of exposing life details that the subject in question, or anyone, would have preferred to have kept secret. But today, the scales seem to be tipping toward open combat. At their most bewitching, biographies can still rescue the history of obscure figures, uncover revelatory truths about the famous, provide startling new insight to finger-worn life stories, and tell a thumping good true tale of a span on Earth we can vicariously enjoy, for reasons of our own. Often, however, recent acts of biography can fall onto the grave of the unwitting subject like a spitefully-dumped load of trash.
We can all chalk up instances, and reviewers do so almost every week, of biographies written as acts of vengeance or exploitation or unexplained hostility, often and at least, it would seem, in countrapuntal response to what is seen as a writer’s or artist’s received public image. The drill is tiresomely familiar: the excavation of hidden sexual proclivities, the extrapolation of psychological interpretations, the whitewashing of the unjustly condemned, the condemnation of the unjustly whitewashed…. Biographers need to sell books, too, we know, and if you can suggest a heretofore unsuspected Amy Winehouse-ish trace of social-sexual mayhem in the pleats of, hypothetically, Emily Bronte’s garniture, more is the rock and roll, and the odds of a New York Times Book Review Page One.');

insert into blogs (name,title,content) values('Peter Heller','On the Future of Innovation','Nowadays, the typical presentation of a futurologist is a near-infinite roll call of possibilities. Sometimes more than a hundred slides create something like a stop-motion film. They consist of photos and drawings that are randomly attached to any combination of various kinds of possible advances in nano-, bio-, and information technology. This leads to the creation of myths, which come to life in the imagination and thus attain a strange quasi-existence. The intelligent fridge (iFridge anyone?) that communicates with its contents and the supermarket is such a case in point. Nobody needs it, nobody has it, nobody can buy it, but it is hard to think of an example of our vision of the future that is so ingrained in our mind. A lot of predictions of the future that were made in the 1950s and 1960s now seem quite childish: the colonisation of the oceans and outer space, factories at zero gravity, gigantic magnetic monorails, and enormous supersonic aeroplanes that bridge the continents.
It is safe to say that it was with the publication of Herman Kahn’s and Anthony Wiener’s The Year 2000 in 1967 that such prognostics became socially acceptable. If, at first glance, it seems this optimism about the future was subsequently replaced by a more sceptical attitude, truth be told, ecological doubts and fears about the depletion of natural resources only fuel the creativity of futurologists. The nuclear-powered automobile is merely replaced by the battery-powered car, oh, and though the power is derived from wind energy, needless to say the curvaceous design remains. Fusion power is now called Desertec and the nuclear reactor for everyone is now a small power station for the single family house, powered by a gas engine. Kahn and Wiener predicted 100 technological innovations, and about half of them came to fruition. So, is futurology with a success rate of 50% merely a simple guessing game that any layman could play just as well as an expert?');

insert into blogs (name,title,content) values('Denis Joe','Rethinking Art and Disability','We were introduced to Nondumiso Hlwele, Bongiwe Mba, and Thobani Ncapai, three members of Bambanani, and the artist Rachel Gadsden. Last year, Gadsden won awards from the International Unlimited London 2012 Cultural Olympiad Commissions to create Unlimited Global Alchemy, and her work with Bambanani is part of that commission. Bambanani was formed in 2002 to participate in the creation of memory books and boxes aimed at helping people come to terms with their HIV diagnosis. The group went on to work on the Longlife Project, which recorded the life stories of women who were participating in a Médecins Sans Frontières (MSF) pilot antiretroviral programme.

Before the discussion began, we were shown a film featuring three members of Bambanani talking about their experiences of coping with HIV. The film also featured Gadsden talking about her work with the group. Nondumiso Hlwele started using body-mapping techniques both as therapy and as a means of getting people to talk about their experience of being HIV positive, and was the inspiration behind Bambanani. She spoke about her work and about her role as a mother, which, she said, was her greatest comfort in life.');

insert into blogs (name,title,content) values('Valentine Rossetti','Beauty on the Big Screen','The commercial release earlier this year of the film ‘I Am Love [Il Sono L’amore]—directed by Luca Guadagnino and co-produced by Tilda Swinton—marked a turning point in contemporary cinema and perhaps the beginning of a new epoch in aesthetic appreciation. Centring around a wealthy Milanese family at the turn of the Millennium, as they face a number of upheavals, it could have been just another character-led art-house extravaganza aimed at the discerning cinephile, but it was something much more.
This film sought to do something different, as described by the editor of Sight & Sound, Nick James, after it was shown at the Toronto Film Festival: ‘Several people who saw the film felt it had a certain quality they hadn’t experienced for some time… the impalpable flavour of some vanished cinematic essence. He went on further to say, ‘I knew what they meant: the film has a heady, operatic, high-art atmosphere, created by its careful milieu-property of the rich Milanese dynasty at its centre; there’s also the unabashed sensuality with which Guadagnino renders the tastes and power struggles of that world, espousing a Romanticism that has perhaps become unfashionable’.
With words of praise such as ‘Sprawlingly ambitious’ and ‘Ravishingly beautiful’ coming from almost every critic from Paris to Los Angeles, the intoxicating effect of this resplendent piece of art-house cinema was clear for all to see, appearing to bewitch even those who had previously regarded art-house as just confectionery for the movie snob, the very effect which the makers of the film had set out to achieve.');

insert into blogs (name,title,content) values('Nicholas Klacsanzky','CBT (Change Block Tracking)','What Exactly is CBT (Change Block Tracking)?
On a virtual machine (VM) that runs on a ESX/ESXi host, you sometimes want to track changes in disk sectors. This is where CBT comes into the picture. This VMware feature can identify disk sectors that have differences between set IDs. In addition, CBT shows which disk sectors are being employed on VMFS partitions.
How Can It Help Me Perform a Backup?
When you complete a software backup, CBT can ask for the transmission of just the blocks on the virtual disk that have been altered since the previous backup, or only the blocks being employed. Conveniently, CBT can be used on third-party applications in connection to vSphere APIs for Data Protection. How it works is that applications call vSphere APIs for Data Protection to ask that VMkernal gives back blocks of data that have been altered on a virtual disk from the time of the previous backup snapshot.
Though CBT is incremental, it is disabled by default. Usually, only administrators can enable CBT, though some applications can enable it automatically. When CBT notices the changes since the last backup, it applies tags to the alterations and creates a CTK file, delineating all the tags. It avoids copying the VM by telling vSphere or third-party backup programs to copy the tagged blocks.');