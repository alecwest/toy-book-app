package com.alecnwest.bookstore.catalogFinder.bookfinder;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record GoogleBooksResult(
        String kind,
        Integer totalItems,
        GoogleBooksItem[] items
) {
}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksItem(
        String kind,
        String id,
        String etag,
        String selfLink,
        GoogleBooksVolumeInfo volumeInfo,
        GoogleBooksSaleInfo saleInfo,
        GoogleBooksAccessInfo accessInfo,
        GoogleBooksSearchInfo searchInfo
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksVolumeInfo(
        String title,
        String[] authors,
        String publisher,
        String publishedDate,
        String description,
        GoogleBooksIndustryIdentifier[] industryIdentifiers,
        GoogleBooksReadingModes readingModes,
        Integer pageCount,
        String printType,
        String[] categories,
        String maturityRating,
        boolean allowAnonLogging,
        String contentVersion,
        GoogleBooksPanelizationSummary panelizationSummary,
        GoogleBooksImageLinks imageLinks,
        String language,
        String previewLink,
        String infoLink,
        String canonicalVolumeLink

) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksIndustryIdentifier(
        String type,
        String identifier
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksReadingModes(
        boolean text,
        boolean image
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksPanelizationSummary(
        boolean containsEpubBubbles,
        boolean containsImageBubbles
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksImageLinks(
        String smallThumbnail,
        String thumbnail
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksSaleInfo(
        String country,
        String saleability,
        boolean isEbook,
        GoogleBooksPrice listPrice,
        GoogleBooksPrice retailPrice,
        String buyLink,
        GoogleBooksOffer[] offers
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksPrice(
        float amount,
        String currencyCode
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksOffer(
        Integer finskyOfferType,
        GoogleBooksMicroPrice listPrice,
        GoogleBooksMicroPrice retailPrice,
        boolean giftable
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksMicroPrice(
        Double amountInMicros,
        String currencyCode
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksAccessInfo(
        String country,
        String viewability,
        boolean embeddable,
        boolean publicDomain,
        String textToSpeechPermission,
        GoogleBooksAvailability epub,
        GoogleBooksAvailability pdf,
        String webReaderLink,
        String accessViewStatus,
        boolean quoteSharingAllowed
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksAvailability (
        boolean isAvailable,
        String acsTokenLink
) {}

@JsonIgnoreProperties(ignoreUnknown = true)
record GoogleBooksSearchInfo(
        String textSnippet
) {}


