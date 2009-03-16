/*
 * JWChat, a web based jabber client
 * Copyright (C) 2003-2004 Stefan Strigler <steve@zeank.in-berlin.de>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 *
 * Please visit http://jwchat.sourceforge.net for more information!
 */

/*
 * This is the main configuration file for the chat client itself.
 * You have to edit this before you can use jwchat on your website!
 *
 * Have a look at the README for hints and troubleshooting!
 */

var SITENAME = "xfaction.net";

var BL_REALMS = [
  'AmanThul',
  'Barthilas',
  'Blackrock',
  'Caelestrasz',
  'DathRemar',
  'Dreadmaul',
  'Frostmourne',
  'Frostwolf',
  'Khazgoroth',
  'KilJaeden',
  'Kilrogg',
  'Nagrand',
  'Nerzhul',
  'Proudmoore',
  'Senjin',
  'Silver-Hand',
  'Thaurissan',
  'Tichondrius',
  'Veknilash'
];
var C_REALMS = [
  'Azjol-Nerub',
  'Bloodscalp',
  'Boulderfist',
  'Bronzebeard',
  'Crushridge',
  'Daggerspine',
  'Darkspear',
  'Draenor',
  'Dragonblight',
  'Dunemaul',
  'Feathermoon',
  'Perenolde',
  'Stonemaul',
  'Stormscale',
  'Suramar',
  'Uldum'
];
var E_REALMS = [
  'Antonidas',
  'Borean-Tundra',
  'Cairne',
  'DrakTharon',
  'Drenden',
  'Farstriders',
  'Garrosh',
  'Hydraxis',
  'MokNathal',
  'Moon-Guard',
  'Nazgrel',
  'Nordrassil',
  'Queldorei',
  'Rivendare',
  'Shandris',
  'Tortheldrin',
  'Wyrmrest-Accord'
];
var N_REALMS = [
  'Aerie-Peak',
  'Altar-of-Storms',
  'Alterac-Mountains',
  'Anvilmar',
  'Arygos',
  'Blackwing-Lair',
  'Deathwing',
  'Demon-Soul',
  'Doomhammer',
  'Gnomeregan',
  'Icecrown',
  'Jaedenar',
  'KelThuzad',
  'Lethon',
  'Onyxia',
  'Sentinels',
  'Tanaris',
  'The-Venture-Co',
  'Uldaman',
  'Undermine'
];
var RAM_REALMS = [
  'Alexstrasza',
  'Alleria',
  'Balnazzar',
  'Blackhand',
  'Chogall',
  'Destromath',
  'Dethecus',
  'Garona',
  'Gorgonnash',
  'Guldan',
  'Hellscream',
  'Illidan',
  'Kaelthas',
  'Kirin-Tor',
  'Ravencrest',
  'Spinebreaker',
  'Stormreaver',
  'Whisperwind'
];
var REC_REALMS = [
  'Arathor',
  'Bonechewer',
  'Dragonmaw',
  'EldreThalas',
  'Firetree',
  'Frostmane',
  'Gurubashi',
  'Nathrezim',
  'Scarlet-Crusade',
  'Shadow-Council',
  'Shadowsong',
  'Silvermoon',
  'Skywall',
  'Smolderthorn',
  'Spirestone',
  'Terenas',
  'Windrunner'
];
var RET_REALMS = [
  'Area-52',
  'Auchindoun',
  'Azuremyst',
  'Blades-Edge',
  'Blood-Furnace',
  'Coilfang',
  'Dawnbringer',
  'Exodar',
  'Fizzcrank',
  'Galakrond',
  'Ghostlands',
  'Grizzly-Hills',
  'Shattered-Halls',
  'Terokkar',
  'The-Scryers',
  'The-Underbog',
  'Velen',
  'Zangarmarsh'
];
var RU_REALMS = [
  'Argent-Dawn',
  'Arthas',
  'Azgalor',
  'Bleeding-Hollow',
  'Bloodhoof',
  'Durotan',
  'Elune',
  'Lothar',
  'Madoran',
  'Magtheridon',
  'Mannoroth',
  'Medivh',
  'Shattered-Hand',
  'Skullcrusher',
  'Stormrage',
  'Trollbane',
  'Warsong',
  'Zuljin'
];
var SHA_REALMS = [
  'Agamaggan',
  'Azshara',
  'Baelgun',
  'Dark-Iron',
  'Detheroc',
  'Emerald-Dream',
  'Greymane',
  'Kalecgos',
  'Lightninghoof',
  'Maelstrom',
  'Malfurion',
  'Moonrunner',
  'Nazjatar',
  'Sargeras',
  'Staghelm',
  'Twisting-Nether',
  'Ursin',
  'Wildhammer'
];
var SS_REALMS = [
  'Andorhal',
  'Anetheron',
  'Archimonde',
  'Black-Dragonflight',
  'Dalaran',
  'Dalvengyr',
  'Dentarg',
  'Duskwood',
  'Executus',
  'Haomarush',
  'Khadgar',
  'MalGanis',
  'Norgannon',
  'Scilla',
  'Steamwheedle-Cartel',
  'Thrall',
  'Turalyon',
  'Ysera',
  'Ysondre',
  'Zuluhed'
];
var VEN_REALMS = [
  'Aegwynn',
  'Akama',
  'Chromaggus',
  'Drakthul',
  'Draka',
  'Eitrigg',
  'Garithos',
  'Gundrak',
  'Hakkar',
  'JubeiThos',
  'Khaz-Modan',
  'Korgath',
  'Kul-Tiras',
  'Malorne',
  'Mugthol',
  'Muradin',
  'Rexxar',
  'Runetotem',
  'Saurfang',
  'Thorium-Brotherhood'
];
var VIN_REALMS = [
  'Aggramar',
  'Burning-Blade',
  'Burning-Legion',
  'Earthen-Ring',
  'Eonar',
  'Eredar',
  'Gilneas',
  'Gorefiend',
  'Kargath',
  'Laughing-Skull',
  'Lightnings-Blade',
  'Llane',
  'Malygos',
  'Shadow-Moon',
  'Thunderhorn',
  'Thunderlord',
  'Drakkari',
  'QuelThalas',
  'Ragnaros'
];
var W_REALMS = [
  'Anubarak',
  'Blackwater-Raiders',
  'Bladefist',
  'Cenarion-Circle',
  'Cenarius',
  'Darrowmere',
  'Echo-Isles',
  'Fenris',
  'Hyjal',
  'Korialstraaz',
  'Lightbringer',
  'Maiev',
  'Misha',
  'Ravenholdt',
  'Shuhalo',
  'Sisters-of-Elune',
  'The-Forgotten-Coast',
  'Uther',
  'Vashj',
  'Winterhoof'
];
var REALMS = new Array();
REALMS = REALMS.concat(BL_REALMS);
REALMS = REALMS.concat(C_REALMS);
REALMS = REALMS.concat(E_REALMS);
REALMS = REALMS.concat(N_REALMS);
REALMS = REALMS.concat(RAM_REALMS);
REALMS = REALMS.concat(REC_REALMS);
REALMS = REALMS.concat(RET_REALMS);
REALMS = REALMS.concat(RU_REALMS);
REALMS = REALMS.concat(SHA_REALMS);
REALMS = REALMS.concat(SS_REALMS);
REALMS = REALMS.concat(VEN_REALMS);
REALMS = REALMS.concat(VIN_REALMS);
REALMS = REALMS.concat(W_REALMS);
REALMS.sort();

/* BACKENDS
 * Array of objects each describing a backend.
 *
 * Required object fields:
 * name      - human readable short identifier for this backend
 * httpbase  - base address of http service [see README for details]
 * type      - type of backend, must be 'polling' or 'binding'
 *
 * Optional object fields:
 * description     - a human readable description for this backend
 * servers_allowed - array of jabber server addresses users can connect to
 *                   using this backend
 *
 * If BACKENDS contains more than one entry users may choose from a
 * select box which one to use when logging in.
 *
 * If 'servers_allowed' is empty or omitted user is presented an input
 * field to enter the jabber server to connect to by hand.
 * If 'servers_allowed' contains more than one element user is
 * presented a select box to choose a jabber server to connect to.
 * If 'servers_allowed' contains one single element no option is
 * presented to user.
 */
var BACKENDS =
[
		{
			name:"Native Binding",
			description:"Ejabberd's native HTTP Binding backend",
			httpbase:"/http-bind/",
			type:"binding",
			servers_allowed:[SITENAME]
		}
];

var DEFAULTRESOURCE = "jwchat";
var DEFAULTPRIORITY = "10";

/* DEFAULTCONFERENCEGROUP + DEFAULTCONFERENCESERVER
 * default values for joingroupchat form
 */
var DEFAULTCONFERENCEROOM = "support";
var DEFAULTCONFERENCESERVER = "conference."+SITENAME;

/* debugging options */
var DEBUG = false; // turn debugging on
var DEBUG_LVL = 2; // debug-level 0..4 (4 = very noisy)

var USE_DEBUGJID = false; // if true only DEBUGJID gets the debugger
var DEBUGJID = "admin@"+SITENAME; // which user get's debug messages


// most probably you don't want to change anything below

var timerval = 2000; // poll frequency in msec

var stylesheet = "jwchat.css";
var THEMESDIR = "themes";

/* Auto-login options. Define parameters for guest user account and
 * when JWChat page is called with 'jid' parameter which is equal
 * to GUEST_ACC value then configuration below is used for autologin.
 * Sample configuration:
 * var GUEST_ACC = "guest_2";
 * var GUEST_PWD = "guestpwd";
 * Sample call:
 * http://jwchat.localhost/index.html?jid=guest_2
 * will triger auto-login for the 'guest_2' account.
 *
 * As it is possible that many people try to login at the same time
 * the auto-login function will generate random resource based on
 * algorithm: DEFAULTRESOURCE + Math.round(Math.random()*1000)
 */
var GUEST_ACC = "";
var GUEST_PWD = "";

function createCookie(name,value,days) {
  var date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
  var expires = "; expires="+date.toGMTString();
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
