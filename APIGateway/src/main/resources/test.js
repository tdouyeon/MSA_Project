const jsonData = [
  {
    id: 1,
    path: "/first-service",
    statusCode: 200,
    duration: 49,
    timestamp: "2024-01-26T11:41:15",
    minute: 701,
  },
  {
    id: 2,
    path: "/first-service",
    statusCode: 304,
    duration: 82,
    timestamp: "2024-01-26T11:44:38",
    minute: 704,
  },
  {
    id: 3,
    path: "/first-service",
    statusCode: 304,
    duration: 12,
    timestamp: "2024-01-26T11:45:55",
    minute: 705,
  },
  {
    id: 4,
    path: "/first-service",
    statusCode: 304,
    duration: 165,
    timestamp: "2024-01-26T11:57:51",
    minute: 717,
  },
  {
    id: 5,
    path: "/first-service",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T11:57:54",
    minute: 717,
  },
  {
    id: 6,
    path: "/first-service",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T11:57:54",
    minute: 717,
  },
  {
    id: 7,
    path: "/first-service",
    statusCode: 304,
    duration: 67,
    timestamp: "2024-01-26T12:12:33",
    minute: 732,
  },
  {
    id: 8,
    path: "/first-service",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T12:12:34",
    minute: 732,
  },
  {
    id: 9,
    path: "/first-service",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T12:12:34",
    minute: 732,
  },
  {
    id: 10,
    path: "/first-service",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T12:12:34",
    minute: 732,
  },
  {
    id: 11,
    path: "/first-service",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T12:12:34",
    minute: 732,
  },
  {
    id: 12,
    path: "/first-service",
    statusCode: 304,
    duration: 76,
    timestamp: "2024-01-26T12:21:52",
    minute: 741,
  },
  {
    id: 13,
    path: "/first-service",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T12:21:57",
    minute: 741,
  },
  {
    id: 14,
    path: "/first-service",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T12:21:57",
    minute: 741,
  },
  {
    id: 15,
    path: "/first-service",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T12:21:57",
    minute: 741,
  },
  {
    id: 16,
    path: "/first-service",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T12:21:57",
    minute: 741,
  },
  {
    id: 17,
    path: "/first-service",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T12:21:57",
    minute: 741,
  },
  {
    id: 18,
    path: "/first-service",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T12:21:57",
    minute: 741,
  },
  {
    id: 19,
    path: "/first-service",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T12:21:57",
    minute: 741,
  },
  {
    id: 20,
    path: "/first-service",
    statusCode: 304,
    duration: 146,
    timestamp: "2024-01-26T13:05:26",
    minute: 785,
  },
  {
    id: 21,
    path: "/sns",
    statusCode: 200,
    duration: 194,
    timestamp: "2024-01-26T14:19:42",
    minute: 859,
  },
  {
    id: 22,
    path: "/sns",
    statusCode: 304,
    duration: 12,
    timestamp: "2024-01-26T14:19:51",
    minute: 859,
  },
  {
    id: 23,
    path: "/sns",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:19:52",
    minute: 859,
  },
  {
    id: 24,
    path: "/sns",
    statusCode: 304,
    duration: 16,
    timestamp: "2024-01-26T14:21:55",
    minute: 861,
  },
  {
    id: 25,
    path: "/sns",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:21:56",
    minute: 861,
  },
  {
    id: 26,
    path: "/sns",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:21:56",
    minute: 861,
  },
  {
    id: 27,
    path: "/sns",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:21:56",
    minute: 861,
  },
  {
    id: 28,
    path: "/sns",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:21:56",
    minute: 861,
  },
  {
    id: 29,
    path: "/sns",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:21:57",
    minute: 861,
  },
  {
    id: 30,
    path: "/sns",
    statusCode: 404,
    duration: 27,
    timestamp: "2024-01-26T14:27:26",
    minute: 867,
  },
  {
    id: 31,
    path: "/sns",
    statusCode: 404,
    duration: 27,
    timestamp: "2024-01-26T14:28:00",
    minute: 868,
  },
  {
    id: 32,
    path: "/sns",
    statusCode: 404,
    duration: 6,
    timestamp: "2024-01-26T14:28:01",
    minute: 868,
  },
  {
    id: 33,
    path: "/sns",
    statusCode: 404,
    duration: 29,
    timestamp: "2024-01-26T14:28:22",
    minute: 868,
  },
  {
    id: 34,
    path: "/sns",
    statusCode: 404,
    duration: 5,
    timestamp: "2024-01-26T14:28:23",
    minute: 868,
  },
  {
    id: 35,
    path: "/sns",
    statusCode: 200,
    duration: 44,
    timestamp: "2024-01-26T14:29:00",
    minute: 869,
  },
  {
    id: 36,
    path: "/sns",
    statusCode: 200,
    duration: 20,
    timestamp: "2024-01-26T14:30:23",
    minute: 870,
  },
  {
    id: 37,
    path: "/sns/main.css",
    statusCode: 200,
    duration: 22,
    timestamp: "2024-01-26T14:30:23",
    minute: 870,
  },
  {
    id: 38,
    path: "/sns",
    statusCode: 200,
    duration: 16,
    timestamp: "2024-01-26T14:31:27",
    minute: 871,
  },
  {
    id: 39,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:31:27",
    minute: 871,
  },
  {
    id: 40,
    path: "/sns",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:31:28",
    minute: 871,
  },
  {
    id: 41,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:31:28",
    minute: 871,
  },
  {
    id: 42,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 9,
    timestamp: "2024-01-26T14:32:26",
    minute: 872,
  },
  {
    id: 43,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:32:26",
    minute: 872,
  },
  {
    id: 44,
    path: "/sns/join",
    statusCode: 404,
    duration: 11,
    timestamp: "2024-01-26T14:32:28",
    minute: 872,
  },
  {
    id: 45,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:32:28",
    minute: 872,
  },
  {
    id: 46,
    path: "/sns/join",
    statusCode: 404,
    duration: 7,
    timestamp: "2024-01-26T14:32:31",
    minute: 872,
  },
  {
    id: 47,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:32:31",
    minute: 872,
  },
  {
    id: 48,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 6,
    timestamp: "2024-01-26T14:32:31",
    minute: 872,
  },
  {
    id: 49,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:32:31",
    minute: 872,
  },
  {
    id: 50,
    path: "/sns/join",
    statusCode: 404,
    duration: 7,
    timestamp: "2024-01-26T14:32:32",
    minute: 872,
  },
  {
    id: 51,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:32:32",
    minute: 872,
  },
  {
    id: 52,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 6,
    timestamp: "2024-01-26T14:32:33",
    minute: 872,
  },
  {
    id: 53,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:32:33",
    minute: 872,
  },
  {
    id: 54,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 8,
    timestamp: "2024-01-26T14:33:17",
    minute: 873,
  },
  {
    id: 55,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:33:17",
    minute: 873,
  },
  {
    id: 56,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 3,
    timestamp: "2024-01-26T14:33:17",
    minute: 873,
  },
  {
    id: 57,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:33:17",
    minute: 873,
  },
  {
    id: 58,
    path: "/sns/auth/kakao",
    statusCode: 302,
    duration: 19,
    timestamp: "2024-01-26T14:33:58",
    minute: 873,
  },
  {
    id: 59,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:34:02",
    minute: 874,
  },
  {
    id: 60,
    path: "/sns",
    statusCode: 304,
    duration: 37,
    timestamp: "2024-01-26T14:34:18",
    minute: 874,
  },
  {
    id: 61,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:34:18",
    minute: 874,
  },
  {
    id: 62,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:34:23",
    minute: 874,
  },
  {
    id: 63,
    path: "/sns/join",
    statusCode: 404,
    duration: 8,
    timestamp: "2024-01-26T14:34:24",
    minute: 874,
  },
  {
    id: 64,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:34:25",
    minute: 874,
  },
  {
    id: 65,
    path: "/sns/join",
    statusCode: 404,
    duration: 8,
    timestamp: "2024-01-26T14:34:27",
    minute: 874,
  },
  {
    id: 66,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:34:27",
    minute: 874,
  },
  {
    id: 67,
    path: "/sns/join",
    statusCode: 404,
    duration: 25,
    timestamp: "2024-01-26T14:35:14",
    minute: 875,
  },
  {
    id: 68,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:35:14",
    minute: 875,
  },
  {
    id: 69,
    path: "/sns/join",
    statusCode: 404,
    duration: 3,
    timestamp: "2024-01-26T14:35:15",
    minute: 875,
  },
  {
    id: 70,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:35:15",
    minute: 875,
  },
  {
    id: 71,
    path: "/sns/join",
    statusCode: 404,
    duration: 5,
    timestamp: "2024-01-26T14:35:15",
    minute: 875,
  },
  {
    id: 72,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:35:15",
    minute: 875,
  },
  {
    id: 73,
    path: "/sns",
    statusCode: 304,
    duration: 23,
    timestamp: "2024-01-26T14:35:17",
    minute: 875,
  },
  {
    id: 74,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:35:17",
    minute: 875,
  },
  {
    id: 75,
    path: "/sns",
    statusCode: 304,
    duration: 45,
    timestamp: "2024-01-26T14:35:24",
    minute: 875,
  },
  {
    id: 76,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:35:24",
    minute: 875,
  },
  {
    id: 77,
    path: "/sns",
    statusCode: 304,
    duration: 43,
    timestamp: "2024-01-26T14:35:25",
    minute: 875,
  },
  {
    id: 78,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:35:25",
    minute: 875,
  },
  {
    id: 79,
    path: "/sns/join",
    statusCode: 404,
    duration: 7,
    timestamp: "2024-01-26T14:35:27",
    minute: 875,
  },
  {
    id: 80,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:35:27",
    minute: 875,
  },
  {
    id: 81,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:35:29",
    minute: 875,
  },
  {
    id: 82,
    path: "/sns",
    statusCode: 304,
    duration: 15,
    timestamp: "2024-01-26T14:37:15",
    minute: 877,
  },
  {
    id: 83,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:37:15",
    minute: 877,
  },
  {
    id: 84,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 7,
    timestamp: "2024-01-26T14:37:22",
    minute: 877,
  },
  {
    id: 85,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:37:22",
    minute: 877,
  },
  {
    id: 86,
    path: "/sns/join",
    statusCode: 404,
    duration: 5,
    timestamp: "2024-01-26T14:37:23",
    minute: 877,
  },
  {
    id: 87,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:37:23",
    minute: 877,
  },
  {
    id: 88,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 5,
    timestamp: "2024-01-26T14:37:24",
    minute: 877,
  },
  {
    id: 89,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:37:24",
    minute: 877,
  },
  {
    id: 90,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 27,
    timestamp: "2024-01-26T14:38:01",
    minute: 878,
  },
  {
    id: 91,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:38:01",
    minute: 878,
  },
  {
    id: 92,
    path: "/sns/join",
    statusCode: 404,
    duration: 7,
    timestamp: "2024-01-26T14:38:02",
    minute: 878,
  },
  {
    id: 93,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:38:02",
    minute: 878,
  },
  {
    id: 94,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 5,
    timestamp: "2024-01-26T14:38:04",
    minute: 878,
  },
  {
    id: 95,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:38:04",
    minute: 878,
  },
  {
    id: 96,
    path: "/sns/join",
    statusCode: 404,
    duration: 4,
    timestamp: "2024-01-26T14:38:04",
    minute: 878,
  },
  {
    id: 97,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:38:04",
    minute: 878,
  },
  {
    id: 98,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 6,
    timestamp: "2024-01-26T14:38:05",
    minute: 878,
  },
  {
    id: 99,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 11,
    timestamp: "2024-01-26T14:38:05",
    minute: 878,
  },
  {
    id: 100,
    path: "/sns/join",
    statusCode: 404,
    duration: 4,
    timestamp: "2024-01-26T14:38:06",
    minute: 878,
  },
  {
    id: 101,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:38:06",
    minute: 878,
  },
  {
    id: 102,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 4,
    timestamp: "2024-01-26T14:38:06",
    minute: 878,
  },
  {
    id: 103,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:38:06",
    minute: 878,
  },
  {
    id: 104,
    path: "/sns/join",
    statusCode: 404,
    duration: 4,
    timestamp: "2024-01-26T14:38:07",
    minute: 878,
  },
  {
    id: 105,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:38:07",
    minute: 878,
  },
  {
    id: 106,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 6,
    timestamp: "2024-01-26T14:38:07",
    minute: 878,
  },
  {
    id: 107,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:38:07",
    minute: 878,
  },
  {
    id: 108,
    path: "/sns/join",
    statusCode: 404,
    duration: 23,
    timestamp: "2024-01-26T14:38:08",
    minute: 878,
  },
  {
    id: 109,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:38:08",
    minute: 878,
  },
  {
    id: 110,
    path: "/sns/auth/kakao",
    statusCode: 404,
    duration: 4,
    timestamp: "2024-01-26T14:38:09",
    minute: 878,
  },
  {
    id: 111,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:38:09",
    minute: 878,
  },
  {
    id: 112,
    path: "/sns/auth/kakao",
    statusCode: 302,
    duration: 16,
    timestamp: "2024-01-26T14:39:10",
    minute: 879,
  },
  {
    id: 113,
    path: "/sns/join",
    statusCode: 200,
    duration: 26,
    timestamp: "2024-01-26T14:39:15",
    minute: 879,
  },
  {
    id: 114,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:39:15",
    minute: 879,
  },
  {
    id: 115,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:39:21",
    minute: 879,
  },
  {
    id: 116,
    path: "/sns",
    statusCode: 404,
    duration: 6,
    timestamp: "2024-01-26T14:39:26",
    minute: 879,
  },
  {
    id: 117,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 2,
    timestamp: "2024-01-26T14:39:26",
    minute: 879,
  },
  {
    id: 118,
    path: "/sns",
    statusCode: 404,
    duration: 4,
    timestamp: "2024-01-26T14:39:31",
    minute: 879,
  },
  {
    id: 119,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:39:31",
    minute: 879,
  },
  {
    id: 120,
    path: "/sns/join",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:39:33",
    minute: 879,
  },
  {
    id: 121,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:39:33",
    minute: 879,
  },
  {
    id: 122,
    path: "/sns/auth/join",
    statusCode: 302,
    duration: 86,
    timestamp: "2024-01-26T14:39:36",
    minute: 879,
  },
  {
    id: 123,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:39:37",
    minute: 879,
  },
  {
    id: 124,
    path: "/sns/auth/login",
    statusCode: 302,
    duration: 313,
    timestamp: "2024-01-26T14:39:41",
    minute: 879,
  },
  {
    id: 125,
    path: "/sns",
    statusCode: 404,
    duration: 38,
    timestamp: "2024-01-26T14:39:54",
    minute: 879,
  },
  {
    id: 126,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:39:54",
    minute: 879,
  },
  {
    id: 127,
    path: "/sns",
    statusCode: 200,
    duration: 43,
    timestamp: "2024-01-26T14:40:15",
    minute: 880,
  },
  {
    id: 128,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:40:15",
    minute: 880,
  },
  {
    id: 129,
    path: "/sns",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:40:18",
    minute: 880,
  },
  {
    id: 130,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:40:18",
    minute: 880,
  },
  {
    id: 131,
    path: "/sns",
    statusCode: 304,
    duration: 16,
    timestamp: "2024-01-26T14:43:57",
    minute: 883,
  },
  {
    id: 132,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:43:57",
    minute: 883,
  },
  {
    id: 133,
    path: "/sns",
    statusCode: 304,
    duration: 46,
    timestamp: "2024-01-26T14:45:08",
    minute: 885,
  },
  {
    id: 134,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:45:08",
    minute: 885,
  },
  {
    id: 135,
    path: "/sns",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:45:09",
    minute: 885,
  },
  {
    id: 136,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:45:09",
    minute: 885,
  },
  {
    id: 137,
    path: "/sns",
    statusCode: 304,
    duration: 14,
    timestamp: "2024-01-26T14:45:10",
    minute: 885,
  },
  {
    id: 138,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:45:10",
    minute: 885,
  },
  {
    id: 139,
    path: "/sns",
    statusCode: 404,
    duration: 28,
    timestamp: "2024-01-26T14:47:00",
    minute: 887,
  },
  {
    id: 140,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:47:00",
    minute: 887,
  },
  {
    id: 141,
    path: "/sns",
    statusCode: 200,
    duration: 44,
    timestamp: "2024-01-26T14:47:19",
    minute: 887,
  },
  {
    id: 142,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 11,
    timestamp: "2024-01-26T14:47:19",
    minute: 887,
  },
  {
    id: 143,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 200,
    duration: 23,
    timestamp: "2024-01-26T14:47:19",
    minute: 887,
  },
  {
    id: 144,
    path: "/sns",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:47:23",
    minute: 887,
  },
  {
    id: 145,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:47:24",
    minute: 887,
  },
  {
    id: 146,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:47:24",
    minute: 887,
  },
  {
    id: 147,
    path: "/sns/auth/login",
    statusCode: 302,
    duration: 315,
    timestamp: "2024-01-26T14:48:02",
    minute: 888,
  },
  {
    id: 148,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:48:05",
    minute: 888,
  },
  {
    id: 149,
    path: "/sns",
    statusCode: 200,
    duration: 45,
    timestamp: "2024-01-26T14:48:40",
    minute: 888,
  },
  {
    id: 150,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:48:40",
    minute: 888,
  },
  {
    id: 151,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:48:40",
    minute: 888,
  },
  {
    id: 152,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:48:44",
    minute: 888,
  },
  {
    id: 153,
    path: "/sns",
    statusCode: 200,
    duration: 45,
    timestamp: "2024-01-26T14:49:10",
    minute: 889,
  },
  {
    id: 154,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:49:10",
    minute: 889,
  },
  {
    id: 155,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:49:10",
    minute: 889,
  },
  {
    id: 156,
    path: "/sns/auth/login",
    statusCode: 302,
    duration: 304,
    timestamp: "2024-01-26T14:49:13",
    minute: 889,
  },
  {
    id: 157,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:49:17",
    minute: 889,
  },
  {
    id: 158,
    path: "/sns",
    statusCode: 200,
    duration: 19,
    timestamp: "2024-01-26T14:49:18",
    minute: 889,
  },
  {
    id: 159,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:49:18",
    minute: 889,
  },
  {
    id: 160,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:49:18",
    minute: 889,
  },
  {
    id: 161,
    path: "/sns",
    statusCode: 200,
    duration: 45,
    timestamp: "2024-01-26T14:49:55",
    minute: 889,
  },
  {
    id: 162,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:49:55",
    minute: 889,
  },
  {
    id: 163,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 12,
    timestamp: "2024-01-26T14:49:55",
    minute: 889,
  },
  {
    id: 164,
    path: "/sns/auth/login",
    statusCode: 302,
    duration: 299,
    timestamp: "2024-01-26T14:49:58",
    minute: 889,
  },
  {
    id: 165,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 14,
    timestamp: "2024-01-26T14:50:14",
    minute: 890,
  },
  {
    id: 166,
    path: "/sns",
    statusCode: 304,
    duration: 36,
    timestamp: "2024-01-26T14:50:16",
    minute: 890,
  },
  {
    id: 167,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:50:16",
    minute: 890,
  },
  {
    id: 168,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 10,
    timestamp: "2024-01-26T14:50:16",
    minute: 890,
  },
  {
    id: 169,
    path: "/sns/auth/login",
    statusCode: 302,
    duration: 295,
    timestamp: "2024-01-26T14:50:19",
    minute: 890,
  },
  {
    id: 170,
    path: "/sns",
    statusCode: 200,
    duration: 18,
    timestamp: "2024-01-26T14:50:19",
    minute: 890,
  },
  {
    id: 171,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 5,
    timestamp: "2024-01-26T14:50:19",
    minute: 890,
  },
  {
    id: 172,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 12,
    timestamp: "2024-01-26T14:50:19",
    minute: 890,
  },
  {
    id: 173,
    path: "/sns/hashtag",
    statusCode: 200,
    duration: 30,
    timestamp: "2024-01-26T14:50:23",
    minute: 890,
  },
  {
    id: 174,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:50:23",
    minute: 890,
  },
  {
    id: 175,
    path: "/sns/hashtag",
    statusCode: 200,
    duration: 29,
    timestamp: "2024-01-26T14:50:25",
    minute: 890,
  },
  {
    id: 176,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:50:25",
    minute: 890,
  },
  {
    id: 177,
    path: "/sns/post/img",
    statusCode: 200,
    duration: 32,
    timestamp: "2024-01-26T14:50:44",
    minute: 890,
  },
  {
    id: 178,
    path: "/sns/img/dfdf1706248244950.png",
    statusCode: 200,
    duration: 5,
    timestamp: "2024-01-26T14:50:44",
    minute: 890,
  },
  {
    id: 179,
    path: "/sns/post",
    statusCode: 302,
    duration: 48,
    timestamp: "2024-01-26T14:50:46",
    minute: 890,
  },
  {
    id: 180,
    path: "/sns/hashtag",
    statusCode: 200,
    duration: 54,
    timestamp: "2024-01-26T14:51:05",
    minute: 891,
  },
  {
    id: 181,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 8,
    timestamp: "2024-01-26T14:51:05",
    minute: 891,
  },
  {
    id: 182,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:51:06",
    minute: 891,
  },
  {
    id: 183,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:51:06",
    minute: 891,
  },
  {
    id: 184,
    path: "/sns",
    statusCode: 200,
    duration: 11,
    timestamp: "2024-01-26T14:51:07",
    minute: 891,
  },
  {
    id: 185,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:51:07",
    minute: 891,
  },
  {
    id: 186,
    path: "/sns/img/dfdf1706248244950.png",
    statusCode: 304,
    duration: 9,
    timestamp: "2024-01-26T14:51:07",
    minute: 891,
  },
  {
    id: 187,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 11,
    timestamp: "2024-01-26T14:51:07",
    minute: 891,
  },
  {
    id: 188,
    path: "/sns/auth/login",
    statusCode: 302,
    duration: 297,
    timestamp: "2024-01-26T14:51:11",
    minute: 891,
  },
  {
    id: 189,
    path: "/sns",
    statusCode: 200,
    duration: 19,
    timestamp: "2024-01-26T14:51:11",
    minute: 891,
  },
  {
    id: 190,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 16,
    timestamp: "2024-01-26T14:51:11",
    minute: 891,
  },
  {
    id: 191,
    path: "/sns/img/dfdf1706248244950.png",
    statusCode: 304,
    duration: 12,
    timestamp: "2024-01-26T14:51:11",
    minute: 891,
  },
  {
    id: 192,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 4,
    timestamp: "2024-01-26T14:51:11",
    minute: 891,
  },
  {
    id: 193,
    path: "/sns/post/img",
    statusCode: 200,
    duration: 22,
    timestamp: "2024-01-26T14:51:14",
    minute: 891,
  },
  {
    id: 194,
    path: "/sns/img/dfdf1706248274595.png",
    statusCode: 200,
    duration: 6,
    timestamp: "2024-01-26T14:51:14",
    minute: 891,
  },
  {
    id: 195,
    path: "/sns/post",
    statusCode: 302,
    duration: 35,
    timestamp: "2024-01-26T14:51:16",
    minute: 891,
  },
  {
    id: 196,
    path: "/sns",
    statusCode: 200,
    duration: 13,
    timestamp: "2024-01-26T14:51:16",
    minute: 891,
  },
  {
    id: 197,
    path: "/sns/img/dfdf1705971567225.png",
    statusCode: 304,
    duration: 6,
    timestamp: "2024-01-26T14:51:16",
    minute: 891,
  },
  {
    id: 198,
    path: "/sns/img/dfdf1706248274595.png",
    statusCode: 304,
    duration: 7,
    timestamp: "2024-01-26T14:51:16",
    minute: 891,
  },
  {
    id: 199,
    path: "/sns/main.css",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:51:16",
    minute: 891,
  },
  {
    id: 200,
    path: "/sns/img/dfdf1706248244950.png",
    statusCode: 304,
    duration: 3,
    timestamp: "2024-01-26T14:51:16",
    minute: 891,
  },
];

// 변환된 결과를 저장할 객체
const transformedData = {};

// 주어진 데이터를 원하는 형식으로 변환하는 함수
function transformData(input) {
  const match = input.path.match(/^\/([a-z-]+)\//);
  const pathGroup = match ? match[1] : input.path.replace(/^\//, ""); // 슬래시 제거

  const key = `${pathGroup}_${input.statusCode}`;

  if (!transformedData[key]) {
    transformedData[key] = {
      url: pathGroup,
      data: [
        {
          statusCode: input.statusCode,
          timestamp: {},
        },
      ],
    };
  }

  const timestampWithoutT = input.timestamp.replace("T", " ");
  const timestampKey = timestampWithoutT.substring(0, 16);
  if (!transformedData[key].data[0].timestamp[timestampKey]) {
    transformedData[key].data[0].timestamp[timestampKey] = 1;
  } else {
    transformedData[key].data[0].timestamp[timestampKey]++;
  }
}

// 주어진 데이터 배열에 대해 변환 함수를 호출
jsonData.forEach(transformData);

// 결과 출력
const result = Object.values(transformedData);
console.log(JSON.stringify(result, null, 2));