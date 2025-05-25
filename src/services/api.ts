/**
 * Класс для работы с Last.fm API
 */
class LastFmApi {
  private apiKey: string;
  private baseUrl: string;

  /**
   * Создает экземпляр LastFmApi
   * @param {string} apiKey - API ключ для доступа к Last.fm
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://ws.audioscrobbler.com/2.0/';
  }

  /**
   * Выполняет запрос к Last.fm API
   * @param {Record<string, any>} params - Параметры запроса
   * @returns {Promise<any>} Ответ от API
   * @throws {Error} Если произошла ошибка HTTP или API вернуло ошибку
   */
  async makeRequest(params: Record<string, any>): Promise<any> {
    const queryParams = new URLSearchParams({
      ...params,
      api_key: this.apiKey,
      format: 'json',
    });

    const response = await fetch(`${this.baseUrl}?${queryParams}`);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();

    if (data.error) {
      throw new Error(data.message || 'Ошибка запроса к API');
    }

    return data;
  }

  /**
   * Получает список самых популярных исполнителей
   * @param {number} [limit=12] - Количество возвращаемых исполнителей
   * @returns {Promise<any>} Объект с данными о исполнителях
   */
  async getTopArtists(limit: number = 12): Promise<any> {
    return this.makeRequest({
      method: 'chart.gettopartists',
      limit: limit,
    });
  }

  /**
   * Получает список самых популярных треков
   * @param {number} [limit=14] - Количество возвращаемых треков
   * @returns {Promise<any>} Объект с данными о треках
   */
  async getTopTracks(limit: number = 14): Promise<any> {
    return this.makeRequest({
      method: 'chart.gettoptracks',
      limit: limit,
    });
  }

  /**
   * Ищет исполнителей по запросу
   * @param {string} query - Поисковый запрос
   * @param {number} [limit=12] - Количество возвращаемых результатов
   * @returns {Promise<any>} Объект с результатами поиска
   */
  async searchArtists(query: string, limit: number = 12): Promise<any> {
    return this.makeRequest({
      method: 'artist.search',
      artist: query,
      limit: limit,
    });
  }

  /**
   * Ищет треки по запросу
   * @param {string} query - Поисковый запрос
   * @param {number} [limit=14] - Количество возвращаемых результатов
   * @returns {Promise<any>} Объект с результатами поиска
   */
  async searchTracks(query: string, limit: number = 14): Promise<any> {
    return this.makeRequest({
      method: 'track.search',
      track: query,
      limit: limit,
    });
  }
}

const lastFmApi = new LastFmApi('75d73dcbfb278fb7b1d8f76b2228bb86');
export default lastFmApi;